import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const NavbarWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-height: 8vh;
	background: #5d4954;
	height: 30px;
`

export const Ul = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-around;
	width: 30%;
	white-space: nowrap;
	margin-right: 150px;
`
export const Li = styled.li`
	border-left: 1px solid #846877;
	border-spacing: 0px 5px;
	margin-right: 15px;
`
export const A = styled.a`
	cursor: pointer;
	color: white;
	text-decoration: none;
	&:hover {
		color: ${UiKitDefaults.hover.color};
	}
`
export const ALogo = styled(A)`
	margin-left: 15vw;
	text-transform: uppercase;
	letter-spacing: 5px;
`
//Mobile
