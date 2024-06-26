import axios from 'axios'
import { useQuery as useQueryLib } from 'react-query'
import useAccessKeyStore from '../stores/accessKey'
import { IUseQuery } from './useQuery.interfaces'

export const api = axios.create({
  baseURL: process.env.REACT_APP_BOB_API 
})

api.interceptors.response.use(
  response => response, 
  error => {
    if(error.response && [401, 403].includes(error.response.status)) {
      window.location.href = '/login'
    }
    else if(error.response && [500].includes(error.response.status)) {
      window.location.href = '/error'
    }
    return Promise.reject(error)
  }
)

export function useQuery(useQueryProps: IUseQuery) {
  const key = useAccessKeyStore(state => state.userCredentials.accessKey)

  const filterKeys = Object.keys(useQueryProps.filters)

  const requestURL = useQueryProps.filters 
    ? filterKeys.filter(filter => useQueryProps.filters[filter] !== '').reduce(( str, filter ) => `${str}${filter}=${useQueryProps.filters[filter]}&`,`${useQueryProps.url}?`)
    : useQueryProps.url

  const { refetch, data, isFetching } = useQueryLib(useQueryProps.id, async () => {    
    const response = await api(
      {
        url: requestURL,
        method: 'GET',
        headers: {
          token: key,
        },
        data: useQueryProps.data
      }
    )
    return response.data
  }, {
    staleTime: 60000,
    enabled: !useQueryProps.disable
  })

  useQueryProps.callback  && useQueryProps.callback(data)

  return { refetch, data, isFetching }
}