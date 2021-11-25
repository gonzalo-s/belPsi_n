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
import { Box, Stack, HStack } from '@chakra-ui/react'

function Navbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	function handleMenuClick() {
		setDisplayMenu(!displayMenu)
	}
	return (
		<HStack>
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
		</HStack>
	)
}
export default Navbar
