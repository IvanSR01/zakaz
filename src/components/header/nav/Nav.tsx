'use client'
import { FC } from 'react'
import styles from './Nav.module.scss'
import Link from 'next/link'
import Switch from '@/shared/ui/switch/Switch'
import Button from '@/shared/ui/button/Button'
import { useReSize } from '@/hooks/useReSize'
import Menu from './Menu/Menu'

export const links = [
	{ name: 'Об издательстве', path: '/house' },
	{
		name: 'Журналы',
		path: '/magazine',
	},
	{
		name: 'Опубликовать',
		path: '/publishin',
	},
]

const Nav: FC = () => {
	const fun = () => {}
	const width = useReSize()
	return (
		<div className={styles.nav}>
			{width < 1200 ? (
				<Menu />
			) : (
				<>
					{links.map((item, i) => (
						<Link href={item.path} key={i}>
							{item.name}
						</Link>
					))}
					<Switch options={['Ru', 'En']} setState={fun} />
					<a href="https://system.cifra.science/authorize/login">
						<Button>Вход и регистрация</Button>
					</a>
				</>
			)}
		</div>
	)
}
export default Nav
