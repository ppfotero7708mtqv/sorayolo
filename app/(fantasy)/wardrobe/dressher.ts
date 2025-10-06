'use client';

import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

/** use zustand to manage dressher info */

export interface Dressher {
  selectedTags: string[];
  prompt: string;

  /** origin image and mask  */
  originImage: string;
  maskImage: string;

  originSize: { width: number; height: number };

  setOriginImage: (img: string) => void;
  setOriginSize: (w: number, h: number) => void;

  /** container size and area */
  containerSize: { width: number; height: number }; // canvas container size: [width,height]
  containerXYWH: {
    left: number;
    top: number;
    width: number;
    height: number;
  };

  setSelectedTags: (tags: string[]) => void;
  setPrompt: (prompt: string) => void;

  clearAll: () => void;

  setSize: (w: number, h: number) => void;
  setXYWH: (x: number, y: number, w: number, h: number) => void;
}

export const useDressher = create<Dressher>()(
  devtools(
    persist(
      (set) => ({
        selectedTags: [],
        prompt: '',
        originImage: '',
        maskImage: '',
        originSize: { width: 0, height: 0 },
        setOriginImage: (img: string) => {
          set({ originImage: img });
        },
        setOriginSize: (w: number, h: number) => {
          set({ originSize: { width: w, height: h } });
        },

        containerSize: { width: 0, height: 0 },
        containerXYWH: { left: 0, top: 0, width: 0, height: 0 },
        setSize: (w: number, h: number) => {
          set({ containerSize: { width: w, height: h } });
        },
        setXYWH: (x: number, y: number, w: number, h: number) => {
          set({ containerXYWH: { left: x, top: y, width: w, height: h } });
        },
        setSelectedTags: (tags: string[]) => {
          set({ selectedTags: tags });
        },
        setPrompt: (prompt: string) => {
          set({ prompt });
        },
        clearAll: () => {
          set({
            selectedTags: [],
            prompt: '',
            originImage: '',
            originSize: { width: 0, height: 0 },
            maskImage: '',
          });
        },
      }),
      {
        name: 'dressher',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
