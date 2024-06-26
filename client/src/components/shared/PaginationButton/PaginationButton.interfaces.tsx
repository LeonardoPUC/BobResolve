export interface IPaginationObject {
    currentPage: number
    totalPages: number | undefined
    totalRecords: number | undefined
    handleChangePagination: (event: React.ChangeEvent<unknown>, page: number) => void
}