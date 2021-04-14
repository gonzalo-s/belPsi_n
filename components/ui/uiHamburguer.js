import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

const desktopStartWidth = '996px'
const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

console.log(desktop)

export const Hamburguer = styled.button`
	//no mostrar nada si es desktop
	${desktop} {
		display: none;
	}
	//si es mobile mostrar ham
	${mobile} {
		//position: relative;
		//margin-right: 25px;
		display: flex;
		cursor: pointer;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-items: center;
		top: 0%;
		right: 0%;
		width: 30px;
		height: 30px;
		padding: 0;
		border-width: 0;
		background: ${UiKitDefaults.backgroundColor};
		&:focus {
			outline-style: none;
		}
	}
`
export const HamHLine12 = styled.line`
	//no mostrar nada si es desktop
	${desktop} {
		display: block;
	}
	//si es mobile mostrar ham
	${mobile} {
		display: block;
		width: 30px;
		height: 3px;
		background: ${UiKitDefaults.buttons.backgroundColor};
		margin-bottom: 5px;
	}
`
export const HamHLine3 = styled(HamHLine12)`
	//no mostrar nada si es desktop
	${desktop} {
		display: block;
	}
	//si es mobile mostrar ham
	${mobile} {
		margin-bottom: 0;
	}
`

export const HamXLine1 = styled(HamHLine12)`
	//no mostrar nada si es desktop
	${desktop} {
		display: block;
	}
	//si es mobile mostrar ham
	${mobile} {
		transform: rotate(45deg);
	}
`

export const HamXLine2 = styled(HamXLine1)`
	//no mostrar nada si es desktop
	${desktop} {
		display: block;
	}
	//si es mobile mostrar ham
	${mobile} {
		transform: rotate(-45deg);
	}
`
