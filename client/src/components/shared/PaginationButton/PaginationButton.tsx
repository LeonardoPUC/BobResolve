import { TextPagination, Container } from './PaginationButton.styles'
import { Pagination, ThemeProvider } from '@mui/material'
import { IPaginationObject } from './PaginationButton.interfaces'
import { theme } from './PaginationButton.theme'

const  PaginationButton = (paginationProps: IPaginationObject) => {      
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextPagination>Total {paginationProps.totalRecords} itens</TextPagination> 
        <Pagination count={paginationProps.totalPages} onChange={paginationProps.handleChangePagination} page={paginationProps.currentPage} shape='rounded' color='primary'/>
      </Container>
    </ThemeProvider>
  )
}

export default PaginationButton