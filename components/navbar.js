import React, { useState } from 'react'
import Link from 'next/link'
import LinksDb from './LinksDb'
import { Ul, Li, A, ALogo, NavbarWrapper } from '../components/ui/uiMenuBtns'
import HamMenu from '../components/HamMenu'
import { UiKitDefaults } from '../components/ui/uiDefaults'

function Navbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	function handleMenuClick() {
		setDisplayMenu(!displayMenu)
	}

	return (
		<NavbarWrapper>
			<HamMenu
				displayMenu={displayMenu}
				handleMenuClick={handleMenuClick}
			/>

			<Link className="logoLink" href={LinksDb.menu[0].link}>
				<ALogo>Lic MBS</ALogo>
			</Link>

			<Ul displayMenu={displayMenu}>
				{LinksDb.menu.map((item, i) => {
					return (
						<Li key={i}>
							<Link href={item.link}>
								<A>{item.text}</A>
							</Link>
						</Li>
					)
				})}
			</Ul>
		</NavbarWrapper>
	)
}
export default Navbar
