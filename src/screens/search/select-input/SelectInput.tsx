'use client'
import { FC, useState } from 'react'
import styles from './SelectInput.module.scss'

const SelectInput: FC = () => {
	const [isChecked, setIsChecked] = useState(false)

	const handleChange = () => {
		setIsChecked(!isChecked)
	}
	return (
		<div className={styles.selectInput} onClick={handleChange}>
			<div className={styles.first}>
				<input
					type="checkbox"
					className={styles['hidden-checkbox']}
					checked={isChecked}
				/>
				<label className={styles.checkbox}></label>
				<p>Философия</p>
			</div>
			<p className={styles.count}>233</p>
		</div>
	)
}
export default SelectInput
