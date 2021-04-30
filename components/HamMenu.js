import React, { useState } from 'react'
import {
	Hamburguer,
	HamHLine1,
	HamHLine2,
	HamHLine3,
	HamXLine1,
	HamXLine2,
} from '../components/ui/uiHamburguer'

function HamMenu({ displayMenu, handleMenuClick }) {
	const [hamDisplay, setHamDisplay] = useState(false)

	return (
		<Hamburguer onClick={handleMenuClick}>
			{displayMenu ? (
				<div className="xWrapper">
					<HamXLine1 className="xLineOne" />
					<HamXLine2 />
				</div>
			) : (
				<div className="lineWrapper">
					<HamHLine1 />
					<HamHLine2 />
					<HamHLine3 />
				</div>
			)}
		</Hamburguer>
	)
}

export default HamMenu

// npm install --save-dev babel-plugin-styled-components
