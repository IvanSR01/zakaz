'use client'
import { FC, useRef } from 'react'
import styles from './Aside.module.scss'
import img from '@/assets/Rectangle 3.png'
import { useReSize } from '@/hooks/useReSize'
import clsx from 'clsx'
const Aside: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const itemRef = useRef<HTMLDivElement>(null)
	const handleClick = (isScrollLeft?: boolean) => {
		if (containerRef.current && itemRef.current) {
			if (isScrollLeft)
				containerRef.current.scrollLeft -= itemRef.current?.clientWidth + 10
			else {
				containerRef.current.scrollLeft += itemRef.current?.clientWidth + 10
			}
		}
	}
	const width = useReSize()
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2>Актуальные статьи</h2>
				<div className={styles.arrows}>
					<button className={clsx(styles.arrowStyles)} onClick={() => handleClick(true)}>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.0834 7H2.91671"
								stroke="#2078A5"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7 2.91667L2.91667 7L7 11.0833"
								stroke="#2078A5"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p>назад</p>
					</button>
					<button className={clsx(styles.arrowStyles)}  onClick={() => handleClick()}>
						<p>вперёд</p>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.91663 7H11.0833"
								stroke="#2078A5"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7 2.91667L11.0833 7L7 11.0833"
								stroke="#2078A5"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className={styles.scrollLayout} ref={containerRef}>
				<div className={styles.items}>
					{[...Array(10)].map((_, i) => (
						<div ref={i ? null : itemRef} className={styles.item} key={i}>
							{width >= 600 && (
								<div className={styles.vidgest}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="17"
										height="16"
										viewBox="0 0 17 16"
										fill="none"
									>
										<path
											d="M8.5 6.5C7.67157 6.5 7 7.17157 7 8C7 8.82843 7.67157 9.5 8.5 9.5C9.32842 9.5 10 8.82843 10 8C10 7.17157 9.32842 6.5 8.5 6.5Z"
											fill="white"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8.5 3.66667C6.75482 3.66667 5.18534 4.36759 4.05441 5.23557C3.48821 5.67013 3.02362 6.15275 2.69766 6.62246C2.3779 7.08321 2.16666 7.56769 2.16666 8C2.16666 8.43231 2.3779 8.9168 2.69766 9.37755C3.02362 9.84725 3.48821 10.3299 4.05441 10.7644C5.18534 11.6324 6.75482 12.3333 8.5 12.3333C10.2452 12.3333 11.8147 11.6324 12.9456 10.7644C13.5118 10.3299 13.9764 9.84725 14.3023 9.37755C14.6221 8.9168 14.8333 8.43231 14.8333 8C14.8333 7.56769 14.6221 7.08321 14.3023 6.62246C13.9764 6.15275 13.5118 5.67013 12.9456 5.23557C11.8147 4.36759 10.2452 3.66667 8.5 3.66667ZM6 8C6 6.61929 7.11929 5.5 8.5 5.5C9.88071 5.5 11 6.61929 11 8C11 9.38071 9.88071 10.5 8.5 10.5C7.11929 10.5 6 9.38071 6 8Z"
											fill="white"
										/>
									</svg>
									<p>25,000</p>
								</div>
							)}
							<div className={styles.img}>
								<img src={img.src} />
							</div>
							<div className={styles.tag}>
								<div className={styles.button}>Биологические науки</div>
							</div>
							<p className={styles.content}>
								Генная терапия как революция в лечении редких заболеваний: от
								молекулярных механизмов до клинического применения
							</p>
							<div className={styles.bottom}>
								<div className={styles.date}>Опубликована: 16.01.2024</div>
								<div className={styles.line} />
								<div className={styles.authors}>
									Викторов А. А., Кузнецов Б. В., Иванов Ю. В.
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Aside
