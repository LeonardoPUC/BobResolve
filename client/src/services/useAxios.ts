import axios from 'axios'
import useAccessKeyStore from '../stores/accessKey'

export function useAxios() {
  const key = useAccessKeyStore(state => state.userCredentials.accessKey)

  const api = axios.create({
    baseURL: process.env.REACT_APP_BOB_API,
    headers: {
      token: key,
    },
  })

  // api.interceptors.request.use(
  //   config => {
  //     config.headers.sessionkey = key
  //     return config
  // },
  // error => Promise.reject(error)
  // )

  api.interceptors.response.use(
    response => response, 
    error => {
      if(error.response && [401, 403].includes(error.response.status)) {
        window.location.href = '/login'
      }
      else if(error.response && error.response.status >= 500) {
        window.location.href = '/error'
      }
      return Promise.reject(error)
    }
  )

  return api
}