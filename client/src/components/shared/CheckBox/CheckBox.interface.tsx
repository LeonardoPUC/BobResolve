export interface ICheckBox {
    id: string
    checked: boolean
    color: string
    checkedColor: string 
    label: string
    labelColor: string
    setChecked: React.ChangeEventHandler<HTMLInputElement>
} 

export interface IStyleCheckBox {
    labelColor: string
}