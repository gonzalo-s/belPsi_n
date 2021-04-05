import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MovileMenu from '../components/movileMenu'
import LinksDb from './LinksDb'
import { useMediaQuery } from 'react-responsive'

function Navbar() {
	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	return (
		<div className={styles.navbar}>
			<Link href={'/'}>
				<a className={styles.navbarLogoAnchor}>
					<div className={styles.navbarLogo}>Lic MBS</div>
				</a>
			</Link>
			{isDesktop ? (
				<ul className={styles.navbarUl}>
					{LinksDb.menu.map((item, i) => {
						return (
							<li key={i}>
								<Link href={item.link}>
									<a>{item.text}</a>
								</Link>
							</li>
						)
					})}
				</ul>
			) : (
				<MovileMenu />
			)}
		</div>
	)
}
export default Navbar
