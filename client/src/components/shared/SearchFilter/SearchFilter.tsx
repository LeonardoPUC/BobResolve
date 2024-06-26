import { ISearchFilter } from './SearchFilter.interfaces'
import { SearchContainer } from  './SearchFilter.styles'
import FormControl from '@mui/material/FormControl'

const SearchFilter = (searchFilterProps: ISearchFilter) => {

  return (
    <SearchContainer>
      <FormControl 
        sx={{ 
          width: searchFilterProps.width, 
          ['@media (max-width: 1200px)']: {
            width: '100%'
          } 
        }}
        size='small'
      >
        <input type='text' data-testid='search' placeholder='Filtrar nome' onChange={searchFilterProps.onSearch} value={searchFilterProps.value}/>
      </FormControl>
    </SearchContainer>
  )
}

export default SearchFilter