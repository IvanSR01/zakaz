'use client'
import { FC } from 'react'
import styles from './Publishin.module.scss'
import Layout from '@/components/Layout'
import Wrapper from '@/components/wrapper/Wrapper'
import Button from '@/shared/ui/button/Button'

const Publishin: FC = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<Wrapper>
					<h1>Опубликовать статью</h1>
					<div className={styles.content}>
						<div className={styles.item}>
							<p>
								1. Выход ближайшего номера 03 (141) 2024 запланирован
								на 18.03.2024.
							</p>
							<p>
								2. Перед отправкой рукописи, пожалуйста, убедитесь, что она
								соответствует <a href="#">требованиям</a>.
							</p>
							<p>
								3. Стоимость публикации можно узнать по <a href="#">ссылке</a>
								. Счет высылается в случае принятия статьи к публикации. Факт
								оплаты публикации является принятием условий 
								<a href="">договора-оферты</a> и{' '}
								<a href="">
									политики обработки и хранения персональных данных.
								</a>
							</p>
							<p>
								4. Перед тем как отправить рукопись, рекомендуем получить ORCID
								(<a>Как получить ORCID?</a>), а затем привязать его к сервису{' '}
								<a href="">DataCite Profiles</a> (
								<a href="">инструкция по привязке</a>). При регистрации на
								издательской платформе Вы сможете указать ORCID в специальном
								поле. Связь ORCID и DataCite Profiles поможет отслеживать Вашу
								публикационную активность на международном уровне. Данный
								параметр пока является рекомендуемым, но вполне возможно, что
								вскоре он станет обязательным для всех научных работников.
							</p>
						</div>
						<div className={styles.item}>
							<p>
								5. Отправка и рецензирование рукописей осуществляются с помощью
								специально разработанной платформы. Необходима регистрация: 
							</p>
							<ul>
								<li>
									<p>
										чтобы зарегистрироваться на платформе, перейдите по ссылке:{' '}
										<a href="https://system.cifra.science/authorize/registration">
											 https://system.cifra.science/authorize/registration;
										</a>
									</p>
								</li>
								<li>
									подтвердите аккаунт по ссылке из письма, которое после
									регистрации придет на Ваш электронный адрес (письмо может
									попасть в спам или в папку с рекламными письмами).
								</li>
							</ul>
							<p>6. Отправить рукопись в журнал можно двумя способами:</p>
							<ul>
								<li>
									добавить с помощью инструментов платформы (<a>инструкция</a>);
								</li>
								<li>
									прикрепить на платформе файлом (<a>инструкция</a>).
								</li>
							</ul>
							<p>
								Ссылка для отправки рукописи:{' '}
								<a href="https://system.cifra.science/publishing/article">
									https://system.cifra.science/publishing/article
								</a>
							</p>
							<p>
								7. По всем вопросам о работе платформы обращайтесь по
								электронной почте{' '}
								<a href="editors@research-journal.org">
									editors@research-journal.org
								</a>{' '}
								или через Telegram.
							</p>
							<div className={styles.buttons}>
								<Button style="w">
									<a
										style={{
											textDecoration: 'none',
										}}
										href="https://system.cifra.science/authorize/registration"
									>
										Регистрация
									</a>
								</Button>
								<Button style="w">Инструкция</Button>
								<Button style="w">
									<a
										style={{
											textDecoration: 'none',
										}}
										href="https://research-journal.org/publish"
									>
										Отправить рукопись
									</a>
								</Button>
								<Button style="w">Впоросы</Button>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</Layout>
	)
}
export default Publishin
