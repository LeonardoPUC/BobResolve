import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ICredentials {
  accessKey: string
  userId: number
}

interface IState {
  userCredentials: ICredentials
  addCredentials: (credentials: ICredentials) => void
  removeCredentials: () => void
}

const initialState: ICredentials = {
  accessKey: '',
  userId: 0
}

export const useAccessKeyStore = create<IState>()(
  persist(
    (set) => ({
      userCredentials: initialState,
      addCredentials: (credentials: ICredentials) => {
        set({
          userCredentials:
          {
            accessKey: credentials.accessKey,
            userId: credentials.userId
          }
        })
      },
      removeCredentials: () => {
        set({
          userCredentials: initialState
        })
      },
    }),
    {
      name: 'access-key-store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)

export default useAccessKeyStore