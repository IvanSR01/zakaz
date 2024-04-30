export interface ISelect {
	title?: string
	options?: string[]
	onChange?: (value?: string) => void
	value?: string
	placholder?: string
	className?: string
	style?: string
	isSearchSelect?: boolean
}
