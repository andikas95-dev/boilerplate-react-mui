import { useLocalStorage } from 'react-use'

const TOKEN_KEY = 'jwt'

const [storageVal, setStorageVal, storageRemove] = useLocalStorage(TOKEN_KEY)

export const login = (data: string) => {
  setStorageVal(data)
}

export const logout = () => {
  storageRemove()
}

export const isLogin = () => {
  if (storageVal) {
    return true
  }

  return false
}
