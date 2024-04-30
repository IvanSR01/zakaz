import { FC } from 'react'
import styles from './Home.module.scss'
import Layout from '@/components/Layout'
import Intro from './intro/Intro'
import Wrapper from '@/components/wrapper/Wrapper'
import Aside from './aside/Aside'

const Home: FC = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<Intro />
				<Wrapper>
					<div className={styles.content}>
						<Aside/>
						<h3>Статьи издательства по категориям</h3>
						<div className={styles.items}>
							{[...Array(5)].map((_, i) => (
								<div className={styles.item} key={i}>
									<p className={styles.title}>Естесственные науки</p>
									<div className={styles.categorys}>
										<div className={styles.category} key={i}>
											Биологические науки
										</div>
										<div className={styles.category} key={i}>
											Математика и механика
										</div>
										<div className={styles.category} key={i}>
											Науки о Земле и окружающей среде
										</div>
										<div className={styles.category} key={i}>
											Физические науки
										</div>
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
export default Home
