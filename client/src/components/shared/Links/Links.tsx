import { Container, Title } from './Links.styles'
import { ILinks } from './Links.interfaces'

const Links = (linkProps: ILinks) => {
  return (
    <Container>
      <Title onClick={linkProps.onClick}>
        <a href='#' title='#'>
          {linkProps.icon && <linkProps.icon/>}
          {linkProps.text && <span>{linkProps.text}</span>}
        </a>
      </Title>
    </Container>
  )
}

export default Links