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
	font-family: 'Josefin Sans';

	${Mobile} {
		display: flex;
		height: 60px;
		position: relative;
		flex-direction: column;
		align-items: end;
		top: 0;
		right: 0;
		width: 100%;
	}
`

export const Ul = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-around;
	white-space: nowrap;
	height: 100%;
	gap: 1px;
	padding: 0;
	margin: 0;
	${Mobile} {
		display: ${(props) => (props.displayMenu ? 'flex' : 'none')};
		flex-direction: column;
		padding-top: 60px;
		height: auto;
		gap: 2px;
		background-color: ${UiKitDefaults.mobileMenuBackground};
		position: absolute;
		right: 0;
		z-index: 1;
	}
`
export const Li = styled.li`
	display: flex;
	height: 100%;
	align-items: center;
	${UiKitDefaults.mobile} {
	}
`
export const A = styled.a`
	cursor: pointer;
	text-decoration: none;
	padding: 0.3rem 0.7rem;
	color: ${UiKitDefaults.textColorLight};
	span {
		padding-top: 3px;
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
	}

	&:hover {
		color: ${UiKitDefaults.hover.color};
		span {
			border-bottom-color: ${UiKitDefaults.hover.color};
		}
	}
`

export const ALogo = styled(A)`
	text-transform: uppercase;
	letter-spacing: 5px;
	font-family: 'Josefin Sans';

	color: ${UiKitDefaults.highLightedText};
	${Mobile} {
		position: absolute;
		left: 0;
		top: 14px;
	}
`
