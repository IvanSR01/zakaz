export interface ISwitch {
	options: string[]
	setState?: (val?: string) => void
}