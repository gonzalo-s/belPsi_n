import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

const desktopStartWidth = '996px'
//const Desktop = `@media (min-width: ${desktopStartWidth})`
const Mobile = `@media (max-width: ${desktopStartWidth})`

export const NavbarWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${UiKitDefaults.backgroundColor};
	height: 60px;
	${Mobile} {
		display: flex;
		height: 60px;
		position: relative;
		flex-direction: column;
		align-items: end;
		top: 0;
		right: 0;
		width: 100%;
		border-width: 0;
	}
`

export const Ul = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-around;
	width: 30%;
	white-space: nowrap;
	margin-right: 150px;

	${Mobile} {
		flex-direction: column;
		margin: 0;
		background-color: ${UiKitDefaults.backgroundColor};
		min-height: 200px;
		width: 150px;
		align-items: start;
		display: ${(props) => (props.displayMenu ? 'block' : 'none')};
	}
`
export const Li = styled.li`
	border-left: 1px solid ${UiKitDefaults.buttons.backgroundColor};
	border-spacing: 0px 5px;
	margin-right: 15px;
	padding-bottom: 10px;
`
export const A = styled.a`
	cursor: pointer;
	text-decoration: none;

	color: ${UiKitDefaults.textColorLight};
	&:hover {
		color: ${UiKitDefaults.hover.color};
	}
`
export const ALogo = styled(A)`
	margin-left: 15vw;
	text-transform: uppercase;
	letter-spacing: 5px;
	color: ${UiKitDefaults.highLightedText};
	${Mobile} {
		position: absolute;
		left: 0;
		top: 14px;
		//display: none;
	}
`
