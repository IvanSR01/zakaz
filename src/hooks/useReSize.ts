import { useState, useEffect } from 'react'

export const useReSize = (): number => {
	const [width, setWidth] = useState(typeof window  !== 'undefined'? window.innerWidth : 0)

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return width
}
