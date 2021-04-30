import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const Hamburguer = styled.button`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar ham
	${UiKitDefaults.mobile} {
		display: flex;
		cursor: pointer;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-items: center;
		right: 0%;
		width: 30px;
		height: 30px;
		border-width: 0;
		margin: 10px;
		padding: 17px;
		background-color: rgba(255, 255, 255, 0);
		outline-style: none;
		z-index: 1;
		position: relative;
		&:focus {
			outline-style: none;
		}
		.xWrapper {
			//background-color: red;
			display: flex;
			margin-top: 5px;
			width: 30px;
			height: 30px;
		}
	}
`
export const HamHLine12 = styled.line`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar
	${UiKitDefaults.mobile} {
		display: block;
		width: 30px;
		height: 3px;
		background: ${UiKitDefaults.buttons.backgroundColor};
		margin-bottom: 5px;
	}
`
export const HamHLine3 = styled(HamHLine12)`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar
	${UiKitDefaults.mobile} {
		display: block;
		margin-bottom: 0;
	}
`

export const HamXLine1 = styled(HamHLine12)`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar
	${UiKitDefaults.mobile} {
		display: block;
		transform: rotate(45deg);
	}
`

export const HamXLine2 = styled(HamXLine1)`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar
	${UiKitDefaults.mobile} {
		display: block;
		position: absolute;
		transform: rotate(-45deg);
	}
`
