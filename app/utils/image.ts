import imageCompression from 'browser-image-compression';
import { type RefObject } from 'react';
import { error } from './message';

// click button to get image from local
const getLocalImage = (
  callback: (
    url: string | ArrayBuffer | null,
    size?: {
      width: number;
      height: number;
    }
  ) => void,
  setWaitingModal: (show: boolean) => void,
  maxSizeMB: number = 0.7
) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async () => {
    setWaitingModal(true);
    if (!input.files) {
      setWaitingModal(false);
      return;
    }
    let file = input.files[0];

    //  image compression
    try {
      const compressFile = await imageCompression(file, {
        maxSizeMB: maxSizeMB,
        maxWidthOrHeight: 1280,
        useWebWorker: true,
      });
      file = new File([compressFile], 'xxx', {
        type: file.type,
        lastModified: Date.now(),
      });
    } catch (err) {
      console.error(err);
    }

    // read image: convert image to base64

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;

      // get image size
      const image = new Image();
      image.src = dataURL as string;
      let timeout = setTimeout(() => {
        error('File type error or Timeout!');
        setWaitingModal(false);
      }, 8000);
      image.onload = () => {
        clearTimeout(timeout);
        callback(dataURL, {
          width: image.width,
          height: image.height,
        });
        setWaitingModal(false);
      };

      // callback(dataURL);
    };
    reader.readAsDataURL(file);
  };
  input.click();
};

/** clear image noise points */
const removeImageNoisePoints = async (imgBase64: string): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imgBase64;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      const length = data.length;
      for (let i = 0; i < length; i += 4) {
        if (data[i] <= 125 || data[i + 1] <= 125 || data[i + 2] <= 125) {
          data[i + 3] = 0;
        } else {
          data[i] = 194; // Red
          data[i + 1] = 106; // Green
          data[i + 2] = 193; // Blue
          data[i + 3] = 255; // Alpha (1 * 255 because the data is in the range 0-255)
        }
      }
      context.putImageData(imageData, 0, 0);
      const base64 = canvas.toDataURL('image/png');
      resolve(base64);
    };
  });
};

const exportMaskImage = (
  _ref: RefObject<HTMLCanvasElement>,
  area: {
    left: number;
    top: number;
    width: number;
    height: number;
  },
  callback: (img: string) => void
) => {
  // export canvas image
  const ctx = _ref.current?.getContext('2d');

  if (!ctx) return;

  const { left, top, width, height } = area;
  const imageData = ctx.getImageData(left, top, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) {
      data[i] = 0; // Red
      data[i + 1] = 0; // Green
      data[i + 2] = 0; // Blue
      data[i + 3] = 255;
    } else {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = 255;
    }
  }

  const newCanvas = document.createElement('canvas');
  newCanvas.width = width;
  newCanvas.height = height;
  const newCtx = newCanvas.getContext('2d');
  if (newCtx) {
    newCtx.putImageData(imageData, 0, 0);
    const img = newCanvas.toDataURL('image/png');
    callback && callback(img);
  }
};

// scale image to origin image size
const scaleImage = async (
  imageBase64: string,
  originSize: { width: number; height: number }
): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageBase64;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    image.onload = () => {
      canvas.width = originSize.width;
      canvas.height = originSize.height;
      context.drawImage(image, 0, 0, originSize.width, originSize.height);
      const base64 = canvas.toDataURL('image/png');

      // print image size
      const img = new Image();
      img.src = base64;
      img.onload = () => {};
      resolve(base64);
    };
  });
};

/** User click download button to download img using url */
/**
 * download image using url
 * @param url image url
 * @param fileName download file name
 */
const downloadImgUsingUrl = async (
  url: string | null,
  fileName = 'download'
) => {
  if (url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob(); // Get the image data as a Blob
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    // Optional: Revoke the object URL after download
    URL.revokeObjectURL(link.href);
  }
};

export {
  downloadImgUsingUrl,
  exportMaskImage,
  getLocalImage,
  removeImageNoisePoints,
  scaleImage,
};
