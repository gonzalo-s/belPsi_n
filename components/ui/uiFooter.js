import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${UiKitDefaults.backgroundColor};
	align-items: center;
	font-family: 'Josefin Sans';
	max-height: 28vh;
	padding-top: 5vh;
`

export const FooterTop = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-evenly;
	//margin: 0 50%;
`

export const UlMenu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	justify-content: space-evenly;
	white-space: nowrap;
	//margin-left: 20%;
	width: 12vw;
	padding: 0;
	margin: 0;
	${UiKitDefaults.mobile} {
		display: none;
	}
`
export const UlExtra = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	justify-content: space-evenly;
	white-space: nowrap;
	width: 12vw;
	padding: 0;
	margin: 0;
	${UiKitDefaults.mobile} {
		width: 100%;
		//align-items: left;
		height: 100px;
		padding-left: 2vw;
	}
`
export const Li = styled.li`
	display: flex;
	width: 100%;
	justify-content: flex-start;
`
export const A = styled.a`
	cursor: pointer;
	text-decoration: none;
	padding: 0.3rem 0.9rem;
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

export const FooterBottom = styled.div`
	display: flex;
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
