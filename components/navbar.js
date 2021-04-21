import React, { useState } from 'react'
import Link from 'next/link'
import LinksDb from './LinksDb'
import { Ul, Li, A, ALogo, NavbarWrapper } from '../components/ui/uiMenuBtns'
import HamMenu from '../components/HamMenu'

function Navbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	function handleMenuClick() {
		setDisplayMenu(!displayMenu)
	}

	return (
		<NavbarWrapper displayMenu={displayMenu}>
			<HamMenu
				displayMenu={displayMenu}
				handleMenuClick={handleMenuClick}
			/>
			<Link href={'/'}>
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
