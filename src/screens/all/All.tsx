
import { FC } from 'react'
import styles from './Magazine.module.scss'
import Layout from '@/components/Layout'
import Wrapper from '@/components/wrapper/Wrapper'
import Select from '@/shared/select/Select'

const Magazine: FC = () => {
	const options = [
		'Медицинские науки',
		'Медицинские науки',
		'Медицинские науки',
	]
	return (
		<Layout>
			<div className={styles.wrapper}>
				<Wrapper>
					<h1>Журналы</h1>
					<div className={styles.content}>
						<div className={styles.filter}>
							<Select
								title="Направление"
								placholder="Медицинские науки"
								options={options}
							/>
							<Select
								title="Направление"
								placholder="Медицинские науки"
								options={options}
							/>
							<Select
								title="Направление"
								placholder="Медицинские науки"
								options={options}
							/>
						</div>
						<p className={styles.change}>Выберите журнал</p>
						<div className={styles.items}>
							{[...Array(8)].map((_, i) => (
								<div className={styles.item} key={i}>
									<p>Международный научно-исследовательский журнал</p>
									<div className={styles.buttons}>
										{[...Array(4)].map((_, i) => (
											<button key={i}>AGRIS</button>
										))}
										<button
											className={styles.all}
											key={i}
										>
											<p>Все базы</p>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6 13L10 9L6 5"
													stroke="#2078A5"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</Wrapper>
			</div>
		</Layout>
	)
}
export default Magazine
