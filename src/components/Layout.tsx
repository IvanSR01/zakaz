import { FC, ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
export default Layout
