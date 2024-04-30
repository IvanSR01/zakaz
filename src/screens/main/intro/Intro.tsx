'use client'
import { FC } from 'react'
import styles from './Intro.module.scss'
import Wrapper from '@/components/wrapper/Wrapper'
import { useRouter } from 'next/navigation'

const Intro: FC = () => {
	const {push} = useRouter()
	return (
		<div className={styles.wrapper}>
			<Wrapper>
				<div className={styles.content}>
					<h2>Поиск статей</h2>
					<div className={styles.search}>
						<div className={styles.input}>
							<input placeholder="Введите ключевые слова, фамилию автора, DOI или другой запрос" />
							<button className={styles.button}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.3851 12.4457C8.73482 14.5684 4.85538 14.4013 2.3986 11.9445C-0.23744 9.3085 -0.23744 5.03464 2.3986 2.3986C5.03464 -0.23744 9.3085 -0.23744 11.9445 2.3986C14.4013 4.85538 14.5684 8.73481 12.4457 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8336 17.8943 16.5407 17.6014L11.3851 12.4457ZM3.45926 10.8839C1.40901 8.83363 1.40901 5.50951 3.45926 3.45926C5.50951 1.40901 8.83363 1.40901 10.8839 3.45926C12.9326 5.50801 12.9341 8.82875 10.8884 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82876 12.9341 5.50801 12.9326 3.45926 10.8839Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
						<p onClick={() => push('/search')}>
							Расширенный поиск
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.66663 6.66669H11.3333V13.3334"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.66663 13.3334L11.3333 6.66669"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</p>
					</div>
					<p className={styles.title}>10 000+ статей</p>
				</div>
			</Wrapper>
		</div>
	)
}
export default Intro
