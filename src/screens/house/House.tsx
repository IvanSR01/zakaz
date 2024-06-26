'use client'
import Layout from '@/components/Layout'
import Wrapper from '@/components/wrapper/Wrapper'
import Link from 'next/link'
import { FC } from 'react'
import styles from './House.module.scss'

const House: FC = () => {
	return (
		<>
			<Layout>
				<div className={styles.wrapper}>
					<Wrapper>
						<div className={styles.content}>
							<h1>Издательство</h1>
							<div className={styles.item}>
								<p>
									«Международный научно-исследовательский журнал» (МНИЖ) —
									рецензируемое научное издание, которое предоставляет
									возможность опубликовать свои научные статьи аспирантам,
									преподавателям вузов, студентам, лицам, имеющим ученую
									степень, общественным деятелям, деятелям культуры и
									образования, политикам, экономистам России, стран СНГ и
									дальнего зарубежья.
								</p>
								<p>
									Статьи принимаются по всем направлениям, согласно номенклауре
									научных специальностей ВАК
								</p>
								<div className={styles.line} />
								<p>ISSN (онлайн): 2227-6017.</p>
								<p>ISSN (печатная версия): 2303-9868.</p>
								<p>
									Журнал зарегистрирован в Федеральной службе по надзору в сфере
									связи, информационных технологий и массовых коммуникаций
									(Роскомнадзор).
								</p>
								<Link href={'#'}>
									Свидетельство о регистрации средства массовой информации ЭЛ №
									ФС 77 - 80772
								</Link>
								<div>
									<Link href={'#'}>
										Свидетельство о регистрации средства массовой информации ПИ
										№ ФС 77 - 51217 
									</Link>
									<span>(действие прекращено 02.06.2021).</span>
								</div>
								<p>
									Журнал издается на русском и английском языках. Статьи
									публикуются <br /> в соответствии с принципом открытого
									доступа.
								</p>
								<div className={styles.line} />
								<p>ISSN (онлайн): 2227-6017.</p>
								<p>ISSN (печатная версия): 2303-9868.</p>
								<p>
									Журнал зарегистрирован в Федеральной службе по надзору в сфере
									связи, информационных технологий и массовых коммуникаций
									(Роскомнадзор).
								</p>
								<Link href={'#'}>
									Свидетельство о регистрации средства массовой информации ЭЛ №
									ФС 77 - 80772
								</Link>
								<div>
									<Link href={'#'}>
										Свидетельство о регистрации средства массовой информации ПИ
										№ ФС 77 - 51217 
									</Link>
									<span>(действие прекращено 02.06.2021).</span>
								</div>
								<div className={styles.line} />
								<p>
									Журнал издается на русском и английском языках. Статьи
									публикуются <br /> в соответствии с принципом открытого
									доступа.
								</p>
								<p>Периодичность журнала – один раз в месяц.</p>
								<div className={styles.width}>
									<p>
										Прочие политики журнала:{' '}
										<a href="">https://research-journal.org/policies/.</a>
									</p>
									<br />
								</div>
								<div className={styles.width}>
									<p>
										Договор оферты доступен по <a href="">ссылке</a>.
									</p>
								</div>
								<a href="">Порядок рецензирования рукописей.</a>
							</div>
							<div className={styles.item}>
								<p>Учредитель и издатель</p>
								<p>
									Соколова Марина Владимировна{' / '}
									<a href="">https://sokolovamv.ru</a> {'/ '}
									<a href="">info@sokolovamv.ru</a>
									 (данный электронный адрес используется только для
									административной коммуникации, для вопросов по работе
									конкретных журналов, используйте контакты журналов).
								</p>
								<div className={styles.line} />
								<p>Главный редактор</p>
								<p>
									Меньшаков Андрей Игоревич — кандидат технических наук (
									<a>editors[at]research-journal.org</a>).
								</p>
								<div className={styles.line} />
								<p>Адрес для корреспонденции</p>
								<p>
									620066, Свердловская обл., г. Екатеринбург, ул. Академическая,
									д. 11А, офис 1.
								</p>
								<div className={styles.line} />
								<p>Телефон редакции</p>
								<p>+7-900-202-3909.</p>
							</div>
							<div className={styles.item}>
								<a href="">Редакционная коллегия</a>
								<div className={styles.line} />
								<p>Филологические науки</p>
								<p>
									Растягаев А.В. д-р филол. наук, Московский Городской
									Университет (Москва, Россия). РИНЦ
								</p>
								<p>
									Сложеникина Ю.В. д-р филол. наук, Московский Городской
									Университет (Москва, Россия); РИНЦ
								</p>
								<p>
									Штрекер Н.Ю. к.филол.н., Калужский Государственный Университет
									имени К.Э. Циолковского (Калуга, Россия); РИНЦ
								</p>
								<p>
									Вербицкая О.М. к.филол.н., Иркутский Государственный
									Университет (Иркутск, Россия). РИНЦ
								</p>
								<div className={styles.line} />
								<p>Технические науки</p>
								<p>
									Пачурин Г.В. д-р техн. наук, проф., Нижегородский
									государственный технический университет им. Р.Е. Алексеева
									(Нижний Новгород, Россия). РИНЦ / Scopus
								</p>
								<p>
									Федорова Е.А. д-р техн. наук, проф.,Нижегородский
									государственный архитектурно-строительный университет (Нижний
									Новгород, Россия). РИНЦ / Scopus
								</p>
								<p>
									Герасимова Л.Г., д-р техн. наук, Институт химии и технологии
									редких элементов и минерального сырья им. И.В. Тананаева
									(Апатиты, Россия). РИНЦ / Scopus
								</p>
								<p>
									Курасов В.С., д-р техн. наук, проф., Кубанский государственный
									аграрный университет (Краснодар, Россия). РИНЦ
								</p>
								<p>
									Оськин С.В., д-р техн. наук, проф. Кубанский государственный
									аграрный университет (Краснодар, Россия). РИНЦ
								</p>
								<div className={styles.line} />
								<p>Педагогические науки</p>
								<p>
									Куликовская И.Э. д-р пед. наук, Южный федеральный университет
									(Ростов-на-Дону, Россия). РИНЦ / Scopus
								</p>
								<p>
									Сайкина Е.Г. д-р пед. наук, Российский государственный
									педагогический университет имени А. И. Герцена
									(Санкт-Петербург, Россия). РИНЦ
								</p>
								<p>
									Лукьянова М.И. д-р пед. наук, Ульяновский государственный
									педагогический университет им. И.Н. Ульянова (Ульяновск,
									Россия). РИНЦ
								</p>
								<p>
									Ходакова Н.П., д-р пед. наук, проф., Московский городской
									педагогический университет (Москва, Россия). РИНЦ
								</p>
								<div className={styles.line} />
								<p>Психологические науки</p>
								<p>
									Розенова М.И., д-р психол. наук, проф., Московский
									государственный психолого-педагогический университет (Москва,
									Россия). РИНЦ
								</p>
								<p>
									Ивков Н.Н. д-р психол. наук, Российская академия образования
									(Москва, Россия). РИНЦ
								</p>
								<p>
									Каменская В.Г., д-р психол. наук, к. биол. наук, Елецкий
									государственный университет им. И.А. Бунина (Елец,
									Россия). РИНЦ / Scopus
								</p>
							</div>
						</div>
					</Wrapper>
				</div>
			</Layout>
		</>
	)
}

export default House
