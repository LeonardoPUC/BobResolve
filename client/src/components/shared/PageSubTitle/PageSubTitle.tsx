import { Container } from './PageSubTitle.styles'
import { IPageSubTitle } from './PageSubTitle.interfaces'

const PageSubTitle = (pageSubTitleProps: IPageSubTitle) => {
  return (
    <Container>
      {pageSubTitleProps.subTitle}<br/>
      {pageSubTitleProps.hour}
    </Container>
  )
}

export default PageSubTitle