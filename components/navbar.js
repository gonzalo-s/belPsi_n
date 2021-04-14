import React from 'react'
import Link from 'next/link'
import MovileMenu from '../components/movileMenu'
import LinksDb from './LinksDb'
import { useMediaQuery } from 'react-responsive'
import { Ul, Li, A, ALogo, NavbarWrapper } from '../components/ui/uiMenuBtns'

function Navbar() {
	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	return (
		<NavbarWrapper>
			<Link href={'/'}>
				<ALogo>Lic MBS</ALogo>
			</Link>
			{isDesktop ? (
				<Ul>
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
			) : (
				<MovileMenu />
			)}
		</NavbarWrapper>
	)
}
export default Navbar
