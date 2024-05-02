import { FC, useEffect, useRef, useState } from 'react'
import styles from './CategoryModal.module.scss'
import Category from '../Category'
import './styles.scss'
const CategoryModal: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const modalRef = useRef(null)
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
	return (
		<div className={styles.wrapper}>
			<div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
				<div> Фильтр (5)</div>
				<svg
					width="18"
					height="19"
					viewBox="0 0 18 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.75 14L13.25 9.5L8.75 5"
						stroke="#185F83"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.content} ref={modalRef}>
						<div className={styles.line}></div>
						<Category />
					</div>
				</div>
			)}
		</div>
	)
}
export default CategoryModal
