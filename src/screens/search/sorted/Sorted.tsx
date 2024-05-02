import { FC, useEffect, useRef, useState } from 'react'
import styles from './Sorted.module.scss'
import { ISorted } from './Sorted-interface'

const Sorted: FC<ISorted> = ({ sortOptions, title }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(sortOptions[0] || '')

	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(modalRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.addEventListener('click', handleClick)
		}
	}, [])
	const modalRef = useRef(null)
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
				<p>{title}</p>
				<h3>{value}</h3>
				<svg
					width="18"
					height="19"
					viewBox="0 0 18 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.5 9.25L9 13.75L13.5 9.25"
						stroke="#185F83"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			{isOpen && (
				<div className={styles.content} ref={modalRef}>
					<ul className={styles.items}>
						{sortOptions.map((item, i) => (
							<li
								className={value === item ? styles.active : ''}
								onClick={() => setValue(sortOptions[i])}
								key={i}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
export default Sorted
