import { useEffect } from 'react'
import LandingComponent from '../../components/LandingComponent/LandingComponente'

const Landing = () => {
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
    <LandingComponent/>
  )
}

export default Landing