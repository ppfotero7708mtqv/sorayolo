'use client';

import { useIsMobile } from '@/app/hooks/useIsMobile';
import { cn } from '@/app/utils/cn';
import { Slider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';
import { ImMagicWand } from 'react-icons/im';
import { drawImageInCenter } from '../draw';
import { useDressher } from '../dressher';

const EditMaskCanvas = ({
  autoMaskImage,
  onSubmit,
  maskEditRef,
}: {
  autoMaskImage: string;
  maskEditRef: React.RefObject<HTMLCanvasElement>;
  onSubmit: (imageBase64: string) => void;
}) => {
  let isDrawing = false;
  // const maskEditRef = useRef<HTMLCanvasElement>(null);

  const [rubberSize, setRubberSize] = useState(10);
  const [brushSize, setBrushSize] = useState(10);

  const [selectBrush, setSelectBrush] = useState(false);
  const [selectRubber, setSelectRubber] = useState(false);

  const [isEraser, setIsEraser] = useState(false);

  const [exportMaskImage, setExportMaskImage] = useState<string>('');

  const isMobile = useIsMobile().isMobile;
  const { containerSize, containerXYWH } = useDressher((state) => state);

  const handleClearMaskCanvas = () => {
    // clear canvas
    const ctx = maskEditRef.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  useEffect(() => {
    autoMaskImage &&
      drawImageInCenter(autoMaskImage, maskEditRef, containerSize);
  }, [autoMaskImage, containerSize, maskEditRef]);

  // handleClearMaskCanvas();

  /**
   * click brush or rubber
   * add event on canvas
   */
  const addCanvasEvent = (
    _ref: React.RefObject<HTMLCanvasElement>,
    is_eraser = false
  ) => {
    const ele = _ref.current;
    const ctx = ele?.getContext('2d');

    if (ctx) {
      const draw = (x: number, y: number) => {
        if (maskEditRef.current) {
          const context = maskEditRef.current.getContext('2d');
          if (context) {
            context.lineTo(x, y);
            context.stroke();
          }
        }
      };

      const handleMouseDown = (event: MouseEvent) => {
        isDrawing = true;
        if (is_eraser) {
          ctx.globalCompositeOperation = 'destination-out';
          ctx.lineWidth = rubberSize;
        } else {
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = '#C26AC0';
          ctx.lineWidth = brushSize;
          // ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
        }
        ctx.beginPath();
        draw(event.offsetX, event.offsetY);
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (isDrawing) {
          draw(event.offsetX, event.offsetY);
        }
      };

      const handleMouseUp = (event: MouseEvent) => {
        isDrawing = false;
      };

      const handleTouchStart = (event: TouchEvent) => {
        isDrawing = true;

        if (is_eraser) {
          ctx.globalCompositeOperation = 'destination-out';
          ctx.lineWidth = rubberSize;
        } else {
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = '#C26AC0';
          ctx.lineWidth = brushSize;
          // ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
        }
        ctx.beginPath();
        const touch = event.touches[0];
        const x = touch.pageX - ele?.getBoundingClientRect().left!;
        const y = touch.pageY - ele?.getBoundingClientRect().top!;
        draw(x, y);
      };
      const handleTouchMove = (event: TouchEvent) => {
        if (isDrawing) {
          const touch = event.touches[0];
          const x = touch.pageX - ele?.getBoundingClientRect().left!;
          const y = touch.pageY - ele?.getBoundingClientRect().top!;
          draw(x, y);
        }
      };
      const handleTouchEnd = (event: TouchEvent) => {
        isDrawing = false;
      };

      // clear event
      ele?.removeEventListener('mousedown', handleMouseDown);
      ele?.removeEventListener('mousemove', handleMouseMove);
      ele?.removeEventListener('mouseup', handleMouseUp);
      ele?.removeEventListener('touchstart', handleTouchStart);
      ele?.removeEventListener('touchmove', handleTouchMove);
      ele?.removeEventListener('touchend', handleTouchEnd);
      // add event
      !isMobile && ele?.addEventListener('mousedown', handleMouseDown);
      !isMobile && ele?.addEventListener('mousemove', handleMouseMove);
      !isMobile && ele?.addEventListener('mouseup', handleMouseUp);
      isMobile && ele?.addEventListener('touchstart', handleTouchStart);
      isMobile && ele?.addEventListener('touchmove', handleTouchMove);
      isMobile && ele?.addEventListener('touchend', handleTouchEnd);
    }
  };

  const handlePaintClick = () => {
    if (selectBrush) {
      setSelectBrush(false);
      setSelectRubber(false);
      setIsEraser(false);
    } else {
      setSelectBrush(true);
      setSelectRubber(false);
      setIsEraser(false);
      addCanvasEvent(maskEditRef, false);
    }
  };
  const handleEraserClick = () => {
    if (selectRubber) {
      setSelectBrush(false);
      setSelectRubber(false);
      setIsEraser(false);
    } else {
      setSelectBrush(false);
      setSelectRubber(true);
      setIsEraser(true);
      addCanvasEvent(maskEditRef, true);
    }
  };

  return (
    <div className=" relative h-full w-full">
      <canvas
        ref={maskEditRef}
        className="relative h-full w-full cursor-crosshair touch-none opacity-[60%]"
      ></canvas>

      <div className="absolute bottom-[20px] right-16 flex flex-col items-center gap-2">
        {selectBrush && (
          <div
            className={cn(
              'h-6 w-6 rounded-full',
              'bg-primary-500 transition-all'
            )}
          />
        )}

        {selectBrush && (
          <Slider
            size="sm"
            step={1}
            maxValue={20}
            minValue={5}
            orientation="vertical"
            aria-label="Temperature"
            value={brushSize}
            className="h-20 transition-all"
            color="primary"
            onChange={(val) => {
              typeof val === 'number' && setBrushSize(val);
              addCanvasEvent(maskEditRef, false);
            }}
          />
        )}

        <div
          className={cn(
            'flex h-9 w-9 cursor-pointer items-center justify-center rounded-full',
            selectBrush ? 'bg-primary-500' : 'bg-[#c2c2c2]/50'
          )}
          onClick={handlePaintClick}
          aria-label="upload image"
        >
          <ImMagicWand className="h-6 w-6 -rotate-90 text-white" />
        </div>
      </div>

      <div className="absolute bottom-[20px] right-4 flex flex-col items-center gap-2">
        {selectRubber && (
          <div
            className={cn(
              'h-6 w-6 rounded-full',
              'bg-[#3101BA] transition-all'
            )}
          />
        )}

        {selectRubber && (
          <Slider
            size="sm"
            step={1}
            color="secondary"
            maxValue={20}
            minValue={5}
            orientation="vertical"
            aria-label="Temperature"
            value={rubberSize}
            onChange={(val) => {
              typeof val === 'number' && setRubberSize(val);
              addCanvasEvent(maskEditRef, true);
            }}
            className="h-20"
          />
        )}

        <div
          className={cn(
            'flex h-9 w-9 cursor-pointer items-center justify-center rounded-full',
            selectRubber ? 'bg-[#3101BA]' : 'bg-[#c2c2c2]/50'
          )}
          onClick={handleEraserClick}
          aria-label="upload image"
        >
          <FaEraser className="h-6 w-6 -rotate-90 text-white" />
        </div>
      </div>
    </div>
  );
};

export default EditMaskCanvas;
