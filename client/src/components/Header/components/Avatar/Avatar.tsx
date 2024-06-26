import { Container, AvatarInner, AvatarBorder, AvatarInnerBorder } from './Avatar.styles'
import avatar from '../../../../assets/avatar.png'

const Avatar = () => {
  return (
    <Container className='usuario'>
      <AvatarInner data-testid='avatar' src={avatar}/>
      <AvatarBorder>
        <AvatarInnerBorder/>
      </AvatarBorder>
    </Container>
  )
}

export default Avatar 