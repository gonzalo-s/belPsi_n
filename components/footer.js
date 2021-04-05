import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LinksDb from './LinksDb'
import { useMediaQuery } from 'react-responsive'

function Footer() {
	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	return (
		<div className={styles.footer}>
			<div className={styles.footerRow}>
				{isDesktop && (
					<div className={styles.footerCol}>
						<div className={styles.footerMenu}>
							<ul>
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
						</div>
					</div>
				)}

				<div className={styles.footerCol}>
					<h4>col</h4>
					<ul>
						<li>Lic. Maria Belen Sica </li>
						<li>mail</li>
					</ul>
				</div>
			</div>
			<div className={styles.footerBottom}>Copyright</div>
		</div>
	)
}
export default Footer
