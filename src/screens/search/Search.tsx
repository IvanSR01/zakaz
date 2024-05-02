'use client'
import clsx from 'clsx'
import { FC } from 'react'
import styles from './Search.module.scss'
import Wrapper from '@/components/wrapper/Wrapper'
import Layout from '@/components/Layout'
import Select from '@/shared/select/Select'
import Button from '@/shared/ui/button/Button'
import { useReSize } from '@/hooks/useReSize'
import SearchItem from './search-item/SearchItem'
import Category from './Category'
import Sorted from './sorted/Sorted'
import CategoryModal from './category-modal/CategoryModal'
import Pagination from './pagination/Pagination'
import ShowBy from './show-by/ShowBy'

const Search: FC = () => {
	const width = useReSize()
	return (
		<Layout>
			<div className={styles.wrapper}>
				<Wrapper>
					<h1>Расширенный поиск</h1>
					<div className={clsx(styles.layout, styles.search)}>
						<h2>Поиск</h2>
						<div className={styles.widthSelectOne}>
							<Select
								placholder="Все поля"
								options={['Поле1', 'Pole2', 'Pol3']}
							/>
						</div>
						<div className={styles.widthSelectTwo}>
							<Select
								placholder="Все поля"
								options={['Поле1', 'Pole2', 'Pol3']}
								isSearchSelect={true}
							/>
						</div>
						<div className={styles.or}>
							<Select
								placholder="Или"
								options={['Поле1', 'Pole2', 'Pol3']}
								style="two"
							/>
						</div>
						<div className={styles.widthSelectOne}>
							<Select
								placholder="Все поля"
								options={['Поле1', 'Pole2', 'Pol3']}
							/>
						</div>
						<div className={styles.widthSelectTwo}>
							<Select
								placholder="Все поля"
								options={['Поле1', 'Pole2', 'Pol3']}
							/>
							<svg
								className={styles.svg}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
									stroke="#E83C11"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M15 9L9 15"
									stroke="#E83C11"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9L15 15"
									stroke="#E83C11"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className={styles.buttons}>
							<div className={styles.addButton}>
								<button>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.75 9H14.25"
											stroke="#F6A000"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M9 3.75V14.25"
											stroke="#F6A000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
							<Button classname={styles.button}>Поиск</Button>
						</div>
					</div>
					<div className={styles.components}>
						<div className={clsx(styles.layout, styles.searching)}>
							<div className={styles.header}>
								<p>Результаты поиска</p>
								<span>(501)</span>
								{width >= 1200 ? <></> : <CategoryModal />}
							</div>
							<div className={styles.line}></div>
							<Sorted title='Сортировать по' sortOptions={['релевантности', 'популярности']} />
							{width <= 1200 && (
								<Sorted title='Показывать' sortOptions={['5 статей', '10 статей']} />
							)}
							<div className={styles.items}>
								{[...Array(9)].map((_, i) => (
									<SearchItem key={i} />
								))}
							</div>
						</div>
						{width >= 1200 && <Category></Category>}
					</div>
					<div className={styles.footer}>
						<Pagination />
						{width >= 1200 && <ShowBy />}
					</div>
				</Wrapper>
			</div>
		</Layout>
	)
}
export default Search
