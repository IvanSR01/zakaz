import { FC, useState } from 'react'
import styles from './ShowBy.module.scss'

const ShowBy: FC = () => {
	const [value, setValue] = useState(10)
	return (
		<div className={styles.wrapper}>
			<p>Show by</p>
			<input
				className={styles.input}
				placeholder="10"
				value={value}
				onChange={(e) => setValue(+e.target.value)}
			/>
		</div>
	)
}
export default ShowBy
