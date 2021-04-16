import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

const desktopStartWidth = '996px'
//const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${UiKitDefaults.backgroundColor};
	align-items: center;
`
export const FooterTop = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
`

export const UlMenu = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	white-space: nowrap;
	flex-direction: column;
	min-height: 200px;
	width: 50%;
	align-items: start;
	margin-left: 20%;
	${mobile} {
		display: none;
	}
`
export const UlExtra = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	white-space: nowrap;
	flex-direction: column;
	background-color: ${UiKitDefaults.backgroundColor};
	min-height: 200px;
	width: 50%;
	align-items: start;
	${mobile} {
		width: 100%;
		align-items: center;
	}
`
export const Li = styled.li`
	border-left: 1px solid #846877;
	border-spacing: 0px 5px;
	color: white;
`
export const A = styled.a`
	cursor: pointer;
	color: white;
	text-decoration: none;
	&:hover {
		color: ${UiKitDefaults.hover.color};
	}
`

export const FooterBottom = styled.div`
	color: white;
`
export const Whastapp = styled.a`
	position: absolute;
	bottom: 15vh;
	right: 15px;
	cursor: pointer;
	color: white;
	text-decoration: none;
`
