import { FC, useState } from 'react'
import styles from './Pagination.module.scss'

const Pagination: FC = () => {
	const [state, setState] = useState(1)
	return (
		<div className={styles.wrapper}>
			<div className={styles.arrow}>
				<svg
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11 17.5L6 12.5L11 7.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18 17.5L13 12.5L18 7.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 18.5L9 12.5L15 6.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div className={styles.content}>
				<input
					className={styles.input}
					value={state}
					onChange={(e) => setState(+e.target.value)}
				/>
				<p>из 21513</p>
			</div>
			<div className={styles.arrow}>
				<svg
					className={styles.rotate}
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 18.5L9 12.5L15 6.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					className={styles.rotate}
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11 17.5L6 12.5L11 7.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18 17.5L13 12.5L18 7.5"
						stroke="#2078A5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	)
}
export default Pagination
