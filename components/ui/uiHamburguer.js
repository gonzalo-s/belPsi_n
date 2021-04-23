import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const Hamburguer = styled.button`
	//no mostrar nada si es Desktop
	display: none;
	//si es Mobile mostrar ham
	${UiKitDefaults.mobile} {
		//position: relative;
		//margin-right: 25px;
		display: flex;
		cursor: pointer;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-items: center;
		//top: 0%;
		right: 0%;
		width: 30px;
		height: 30px;
		border-width: 0;
		margin: 10px;
		//right: 0;
		padding: 17px;
		background-color: ${UiKitDefaults.backgroundColor};
		//background-color: red;

		&:focus {
			outline-style: none;
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
		transform: rotate(-45deg);
	}
`
