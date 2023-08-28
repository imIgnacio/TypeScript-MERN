import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User, UserStore } from '@interfaces/User';

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      set => ({
        _id: '',
        first: '',
        last: '',
        email: '',
        updateUser: (payload: User) =>
          set((state: User) => ({
            ...state,
            _id: payload._id,
            first: payload.first,
            last: payload.last,
            email: payload.email,
          })),
        removeUser: () => set({ _id: '', first: '', last: '', email: '' }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
