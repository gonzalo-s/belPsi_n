import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const NavbarWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${UiKitDefaults.backgroundColor};
	height: 60px;
	font-family: 'Josefin Sans';

	${UiKitDefaults.mobile} {
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
	${UiKitDefaults.mobile} {
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
`
export const A = styled.a`
	cursor: pointer;
	text-decoration: none;
	padding: 0.3rem 0.7rem;
	color: ${UiKitDefaults.textColorLight};
	${UiKitDefaults.mobile} {
		padding: 1rem 2rem;
		font-size: 1.5rem;
	}

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

export const ALogo = styled.a`
	cursor: pointer;
	text-decoration: none;
	padding: 0.3rem 0.7rem;
	color: ${UiKitDefaults.textColorLight};
	text-transform: uppercase;
	letter-spacing: 5px;
	font-family: 'Josefin Sans';
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
	color: ${UiKitDefaults.highLightedText};
	${UiKitDefaults.mobile} {
		position: absolute;
		left: 0;
		top: 14px;
	}
`
