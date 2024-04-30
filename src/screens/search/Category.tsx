import clsx from 'clsx'
import { FC } from 'react'
import styles from './Search.module.scss'
import SelectInput from './select-input/SelectInput'
import SearchInput from './search-input/SearchInput'

interface ICategory {}

const Category: FC<ICategory> = () => {
	return (
		<div className={styles.category}>
			<div className={clsx(styles.layout)}>
				<div className={styles.title}>
					<p>Выбрать категорию</p>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 15L12 9L18 15"
							stroke="#185F83"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className={styles.content}>
					<SearchInput />
					{[...Array(9)].map((_, i) => (
						<SelectInput key={i} />
					))}
					<div className={styles.all}>Показать всё</div>
				</div>
			</div>
			<div className={clsx(styles.layout)} style={{ marginTop: '20px' }}>
				<div className={styles.title}>
					<p>Выбрать Автора</p>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 15L12 9L18 15"
							stroke="#185F83"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className={styles.content}>
					<SearchInput />
					{[...Array(3)].map((_, i) => (
						<SelectInput key={i} />
					))}
				</div>
			</div>
		</div>
	)
}
export default Category
