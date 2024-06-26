export interface IUseQuery {
	id: string
	url: string
	filters: Record<string, string>
	callback?: (data: any) => void
	data?: object
	disable?: boolean
}