import React, { useState } from 'react'
import {
	Hamburguer,
	HamHLine12,
	HamHLine3,
	HamXLine1,
	HamXLine2,
} from '../components/ui/uiHamburguer'

function HamMenu() {
	const [menuState, setMenuState] = useState(false)

	function menuClick() {
		setMenuState(!menuState)
		console.log(menuState)
	}
	return (
		<Hamburguer menuState={menuState} onClick={menuClick}>
			{menuState ? (
				<div className="hamX">
					<HamXLine1 />
					<HamXLine2 />
				</div>
			) : (
				<div className="hamLines">
					<HamHLine12 />
					<HamHLine12 />
					<HamHLine3 />
				</div>
			)}
		</Hamburguer>
	)
}

export default HamMenu
