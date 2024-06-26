/* eslint-disable */
import DashboardComponent from '../../components/DashboardComponent/DashboardComponent'
import { steps, stepsMobile } from './TourSteps'
import TourPage from '../../components/shared/TourPage/TourPage'
import { useEffect, useState } from 'react'
import useAccessKeyStore from '../../stores/accessKey'
import { IProfileItem } from '../../components/Header/components/Profile/Profile.interfaces'
import { useQuery } from '../../services/useQuery'


const Dashboard = () => {
  const userId = useAccessKeyStore(state => state.userCredentials.userId).toString()

  const user: IProfileItem = useQuery(
    {
      id: 'get-user',
      url: '/User/GetById',
      filters: {
        id: userId
      }
    }
  ).data?.data

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (screen.width < 768)
      setIsMobile(true);
  })

  return (
    screen.width < 768 ? (
      (user && !user.acceptedTerms) ? (
        <TourPage steps={stepsMobile} component={
          <DashboardComponent />
        } />
      ) : <DashboardComponent />
    ) :
      (
        <TourPage steps={steps} component={
          <DashboardComponent />
        } />
      )

  )

}
export default Dashboard