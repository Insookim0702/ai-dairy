import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Diary } from '../types';

interface DiaryStore {
  diaries: Diary[];
  addDiary: (diary: Omit<Diary, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateDiary: (id: string, diary: Partial<Diary>) => void;
  deleteDiary: (id: string) => void;
}

export const useDiaryStore = create<DiaryStore>()(
  persist(
    (set) => ({
      diaries: [],
      addDiary: (diary) => {
        set((state) => ({
          diaries: [
            ...state.diaries,
            {
              ...diary,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        }));
      },
      updateDiary: (id, diary) => {
        set((state) => ({
          diaries: state.diaries.map((d) =>
            d.id === id
              ? { ...d, ...diary, updatedAt: new Date().toISOString() }
              : d
          ),
        }));
      },
      deleteDiary: (id) => {
        set((state) => ({
          diaries: state.diaries.filter((d) => d.id !== id),
        }));
      },
    }),
    {
      name: 'diary-storage', // localStorage에 저장될 키 이름
    }
  )
); 