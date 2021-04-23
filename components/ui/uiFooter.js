import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${UiKitDefaults.backgroundColor};
	align-items: center;
	${UiKitDefaults.mobile} {
	}
`
export const FooterTop = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	margin: 0 50%;
`

export const UlMenu = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	white-space: nowrap;
	flex-direction: column;
	max-height: 200px;
	width: 50%;
	align-items: start;
	margin-left: 20%;
	${UiKitDefaults.mobile} {
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
	max-height: 200px;
	width: 50%;
	align-items: start;
	${UiKitDefaults.mobile} {
		width: 100%;
		align-items: left;
		height: 100px;
		margin: 0 50%;
		padding: 0;
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
	position: fixed;
	bottom: 15vh;
	right: 15px;
	cursor: pointer;
	color: white;
	text-decoration: none;
	${UiKitDefaults.mobile} {
		bottom: 10vh;
	}
`
