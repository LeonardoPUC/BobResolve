import { BorderLeft, Container, LeftContainer, RightContainer, Title } from './PageTitle.styles'
import { IPageTitle } from './PageTitle.interfaces'

const PageTitle = (pageTitleProps: IPageTitle) => {
  return (
    <Container>
      <LeftContainer>
        <BorderLeft/>
        <Title>{pageTitleProps.title}</Title>
      </LeftContainer>
      <RightContainer>
        {pageTitleProps.children}
      </RightContainer>
    </Container>
  )
}

export default PageTitle