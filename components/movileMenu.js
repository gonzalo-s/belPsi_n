import React, { useState } from 'react'
import styles from '../styles/MovileMenu.module.css'
import Link from 'next/link'
import LinksDb from './LinksDb'

function MovileMenu() {
	const [menuState, setMenuState] = useState(false)

	function menuClick() {
		setMenuState(!menuState)
	}
	return (
		<div className={styles.mobileMenu}>
			<button className={styles.hamContainer} onClick={menuClick}>
				{menuState ? (
					<div className={styles.hamX}>
						<div className={styles.hamXLine1}></div>
						<div className={styles.hamXLine2}></div>
					</div>
				) : (
					<div className={styles.hamLines}>
						<div className={styles.hamLine}></div>
						<div className={styles.hamLine}></div>
						<div className={styles.hamLine}></div>
					</div>
				)}
			</button>
			{menuState && (
				<ul className={styles.hamUl}>
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
			)}
		</div>
	)
}

export default MovileMenu
