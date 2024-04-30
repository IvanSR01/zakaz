'use client'
import { FC, useRef, useState, useEffect } from 'react'
import styles from './Select.module.scss'
import { ISelect } from './Select-interface'
import clsx from 'clsx'

const Select: FC<ISelect> = ({
	options,
	onChange,
	value,
	placholder,
	title,
	style,
	isSearchSelect,
}) => {
	const [select, setSelect] = useState<string>(value ? value : '')
	const [search, setSearch] = useState<string>('')
	const openRef = useRef(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const handleChange = (val: string) => {
		onChange && onChange(val)
		setSelect(val)
		setIsOpen(false)
	}
	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(openRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.addEventListener('click', handleClick)
		}
	}, [])
	return (
		<div
			className={styles.wrapper}
			ref={openRef}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className={styles.title}>{title}</div>
			<div
				className={clsx(styles.select)}
				style={{
					backgroundColor: style ? '#FCECCE' : '#f5f5f5',
				}}
			>
				<div className={styles.selected}>
					{select ? (
						<p
							onClick={() => {
								setSelect('')
								setSearch('')
							}}
						>
							{select}
						</p>
					) : (
						<p
							className={styles.placholder}
							style={{
								color: style ? '#000' : '#b5c1c9',
							}}
						>
							{isSearchSelect ? (
								<input
									value={search}
									className={styles.input}
									onChange={(e) => setSearch(e.target.value)}
									placeholder={placholder}
								/>
							) : (
								placholder
							)}
						</p>
					)}
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={(isOpen && styles.activeSvg) || ''}
					>
						<path
							d="M6.66675 9.5L12.6667 15.5L18.6667 9.5"
							stroke={style ? '#F6A000' : '#185F83'}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				{isOpen && (
					<div
						className={styles.list}
						style={{
							backgroundColor: style ? '#FCECCE' : '#f5f5f5',
						}}
					>
						{options?.map((item, i) => (
							<div
								className={styles.item}
								onClick={() => handleChange(item)}
								key={i}
							>
								{item}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
export default Select
