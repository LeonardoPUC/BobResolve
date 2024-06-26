export interface IModal {
    title: string
    body: React.ReactNode
    buttons: React.ReactNode[]
    handleModalOpen: () => void
}