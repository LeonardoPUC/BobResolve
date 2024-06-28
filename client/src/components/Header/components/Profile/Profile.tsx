import { useQuery } from '../../../../services/useQuery'
import useAccessKeyStore from '../../../../stores/accessKey'
import { IProfile, IProfileItem } from './Profile.interfaces'
import { Container, Name, Description } from './Profile.styles'

const Profile = (profileProps: IProfile) => {
  const userId = useAccessKeyStore(state => state.userCredentials.userId).toString()

  const user: IProfileItem = useQuery(
    {
      id: 'get-user',
      url: `/usuario/${userId}`,
      filters: {}
    }
  ).data

  return (
    <Container color={profileProps.color}>
      <Name>{user?.nome}</Name>
      <Description>{user?.email}</Description>
    </Container>
  )
}

export default Profile 