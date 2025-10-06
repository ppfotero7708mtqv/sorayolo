import { error } from '@/app/utils/message';
import { type RefObject } from 'react';

// draw image in center on canvas
export const drawImageInCenter = (
  imgBase64: string,
  canvasRef: RefObject<HTMLCanvasElement>,
  containerSize: {
    width: number;
    height: number;
  },
  callback?: (
    drawX: number,
    drawY: number,
    drawWidth: number,
    drawHeight: number
  ) => void
) => {
  /** scale iamge to canvas in center */
  const img = new Image();
  img.src = imgBase64;
  img.onload = () => {
    const { width, height } = img;

    const canvas = canvasRef.current;
    if (canvas == null) {
      error('canvas is null');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (ctx == null) {
      error('ctx is null');
      return;
    }

    const containerWidth = containerSize.width;
    const containerHeight = containerSize.height;

    const scale = Math.min(containerWidth / width, containerHeight / height);

    // draw image in center
    const drawWidth = width * scale;
    const drawHeight = height * scale;
    const drawX = (containerWidth - drawWidth) / 2;
    const drawY = (containerHeight - drawHeight) / 2;

    canvas.width = containerWidth;
    canvas.height = containerHeight;
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

    callback && callback(drawX, drawY, drawWidth, drawHeight);
  };
};

// clear image on canvas
export const clearCanvas = (_ref: RefObject<HTMLCanvasElement>) => {
  const canvas = _ref.current;
  if (canvas == null) {
    error('canvas is null');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (ctx == null) {
    error('ctx is null');
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
