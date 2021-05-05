import React, { useState } from 'react'
import Link from 'next/link'
import LinksDb from './LinksDb'
import {
	Ul,
	Li,
	A,
	ALogo,
	NavbarWrapper,
	MenuWrapp,
} from '../components/ui/uiMenuBtns'
import { CgMenu, CgClose } from 'react-icons/cg'

function Navbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	function handleMenuClick() {
		setDisplayMenu(!displayMenu)
	}
	return (
		<NavbarWrapper>
			<MenuWrapp
				onClick={handleMenuClick}
				displayMenu={displayMenu}
				handleMenuClick={handleMenuClick}
			>
				{displayMenu ? (
					<CgClose className="menu" />
				) : (
					<CgMenu className="menu" />
				)}
			</MenuWrapp>

			<Link className="logoLink" href={LinksDb.menu[0].link}>
				<ALogo>Lic MBS</ALogo>
			</Link>

			<Ul displayMenu={displayMenu}>
				{LinksDb.menu.map((item, i) => {
					return (
						<Li key={i}>
							<Link href={item.link}>
								<A>
									<span>{item.text}</span>
								</A>
							</Link>
						</Li>
					)
				})}
			</Ul>
		</NavbarWrapper>
	)
}
export default Navbar
