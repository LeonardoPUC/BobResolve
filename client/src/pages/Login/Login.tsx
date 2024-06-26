import { useEffect } from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

const Login = () => {
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name)
      })
    })
  }
  
  useEffect(() => {
    clearCacheData
  }, [clearCacheData])

  return (
    <LoginComponent/>
  )
}

export default Login