import React, { useState } from 'react'
import {
	Hamburguer,
	HamHLine12,
	HamHLine3,
	HamXLine1,
	HamXLine2,
} from '../components/ui/uiHamburguer'

function HamMenu({ displayMenu, handleMenuClick }) {
	const [hamDisplay, setHamDisplay] = useState(false)

	return (
		<Hamburguer onClick={handleMenuClick}>
			{displayMenu ? (
				<div>
					<HamXLine1 />
					<HamXLine2 />
				</div>
			) : (
				<div>
					<HamHLine12 />
					<HamHLine12 />
					<HamHLine3 />
				</div>
			)}
		</Hamburguer>
	)
}

export default HamMenu
