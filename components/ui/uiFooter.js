import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${UiKitDefaults.backgroundColor};
	align-items: center;
	font-family: 'Josefin Sans';

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
	//border-left: 1px solid ${UiKitDefaults.buttons.backgroundColor};
	border-spacing: 0px 5px;
`
export const A = styled.a`
	cursor: pointer;
	color: ${UiKitDefaults.textColorLight};
	text-decoration: none;
	&:hover {
		color: ${UiKitDefaults.hover.color};
		font-weight: 900;
		text-decoration: underline;
	}
`

export const FooterBottom = styled.div`
	color: ${UiKitDefaults.textColorLight};
`
export const Whastapp = styled.a`
	position: fixed;
	bottom: 15vh;
	right: 15px;
	max-width: 50px;
	max-height: 50px;
	margin-right: 50px;
	border-radius: 50%;
	cursor: pointer;
	background-color: rgba(0 0 0 0);
	//color: ${UiKitDefaults.textColorLight};
	//text-decoration: none;
	${UiKitDefaults.mobile} {
		bottom: 10vh;
		margin-right: 5px;
	}
	&:hover {
		box-shadow: 1px 1px 20px 1px rgba(50, 181, 67, 0.2);
	}
`
