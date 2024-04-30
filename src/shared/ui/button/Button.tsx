import { FC } from 'react'
import styles from './Button.module.scss'
import { IButton } from './Button-interface'
import clsx from 'clsx'

const Button: FC<IButton> = ({ children, onClick, style, classname}) => {
	return (
		<div
			className={clsx(styles.button, style ? styles.styleTwo : styles.styleOne, classname)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
export default Button
