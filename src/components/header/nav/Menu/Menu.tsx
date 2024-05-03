import { FC, useState } from 'react'
import styles from './Menu.module.scss'
import Button from '@/shared/ui/button/Button'
import Link from 'next/link'
import { links } from '../Nav'
import Switch from '@/shared/ui/switch/Switch'

const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const fun = () => {}
	return (
		<div className={styles.menu}>
			<Button onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19.7783 4.22182L4.22192 19.7782"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.7783 19.7782L4.22192 4.22183"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				) : (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23 9H1"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M23 15H8"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				)}
			</Button>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.content}>
						<div className={styles.items}>
							{links.map((item, i) => (
								<Link href={item.path} key={i}>
									{item.name}
								</Link>
							))}
							<p>
								<a href="https://system.cifra.science/authorize/login">
									<Button>Вход и регистрация</Button>
								</a>
							</p>
							<Switch options={['Ru', 'En']} setState={fun} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Menu
