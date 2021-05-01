import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const Hamburguer = styled.button`
	//no mostrar nada si es Desktop
	display: none;
	background-color: transparent;
	//si es Mobile mostrar ham
	${UiKitDefaults.mobile} {
		display: flex;
		cursor: pointer;
		padding: 0;
		margin: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-width: 0;

		outline-style: none;
		position: absolute;
		z-index: 2;
		right: 14px;
		top: 14px;
		&:focus {
			outline-style: none;
		}
		.xWrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 30px;
			height: 30px;
		}
		.lineWrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 30px;
			height: 30px;
		}
	}
`
export const HamHLine1 = styled.div`
	//display: block;
	width: 100%;
	height: 3px;
	background: ${UiKitDefaults.buttons.backgroundColor};
	//margin-bottom: 5px;
`
export const HamHLine2 = styled.div`
	//display: block;
	width: 100%;
	height: 3px;
	background: ${UiKitDefaults.buttons.backgroundColor};
	//margin-bottom: 5px;
`

export const HamHLine3 = styled.div`
	//display: block;
	width: 100%;
	height: 3px;
	background: ${UiKitDefaults.buttons.backgroundColor};
	//margin-bottom: 0;
`

export const HamXLine1 = styled.div`
	//display: block;
	transform: rotate(45deg);
	width: 100%;
	height: 3px;
	background: ${UiKitDefaults.buttons.backgroundColor};
	//margin-bottom: 5px;
`

export const HamXLine2 = styled(HamXLine1)`
	//display: block;
	//position: absolute;
	transform: rotate(-45deg);
`
