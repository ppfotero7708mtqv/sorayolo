/** gems */

import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface GemsStore {
  rubine: number;
  sapphire: number;

  /** increase rubine and sapphire */
  increaseRubine: (num: number) => void;
  increaseSapphire: (num: number) => void;

  /** assume rubine and sapphire */
  assumeRubine: (num: number) => void;
  assumeSapphire: (num: number) => void;

  /** reset rubine and sapphire */
  resetRubine: () => void;
  resetSapphire: () => void;
  resetGems: () => void;
  initGems: () => Promise<void>;
}

/** fetch gem data from server */

const fetchGems = async () => {
  const res = await fetch('/api/gems');
  const data = await res.json();
  return data;
};

export const useGems = create<GemsStore>()(
  devtools(
    persist(
      (set, get) => ({
        rubine: 0,
        sapphire: 0,

        increaseRubine: (num: number) => {
          set({ rubine: get().rubine + num });
        },
        increaseSapphire: (num: number) => {
          set({ sapphire: get().sapphire + num });
        },
        assumeRubine: (num: number) => {
          set({ rubine: num });
        },
        assumeSapphire: (num: number) => {
          set({ sapphire: num });
        },

        resetRubine: () => {
          set({ rubine: 0 });
        },
        resetSapphire: () => {
          set({ sapphire: 0 });
        },
        resetGems: () => {
          set({ rubine: 0, sapphire: 0 });
        },
        initGems: async () => {
          const data = await fetchGems();
          set({ rubine: data.rubine, sapphire: data.sapphire });
        },
      }),
      {
        name: '__DECODA::GEMs',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
