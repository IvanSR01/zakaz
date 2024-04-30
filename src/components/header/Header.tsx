import { FC } from 'react'
import styles from './Header.module.scss'
import Logo from './logo/Logo'
import Wrapper from '../wrapper/Wrapper'
import Nav from './nav/Nav'
const Header: FC = () => {
	return (
		<Wrapper>
			<div className={styles.header}>
				<Logo />
				<Nav/>
			</div>
		</Wrapper>
	)
}

export default Header
