import styled, { createGlobalStyle } from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const GlobalStyle = createGlobalStyle`
	html, body {
		position: relative;
		width: 100%;
		overflow-y: visible;
	}

	/* body{
		padding: 0;
		margin: 0;
		font-family: 'Vollkorn',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		line-height: 1.6;
		font-size: 18px;
		min-height: 100%;
		background-image: url(${UiKitDefaults.body.backgroundImage});
		background-repeat: repeat;
		background-color:${UiKitDefaults.body.backgroundColor};
	}  */
`

export const Container = styled.div``

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	max-width: 1024px;
	width: 100%;
	margin: auto;
	padding-top: 0;
	${UiKitDefaults.mobile} {
		padding-top: 6rem;
	}
`

export const Main = styled.div``

export const PageContentWrap = styled.div`
	flex: 1;
`

// Index Page Quote

export const QuoteWithImg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const QuoteWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	max-width: 70vw;
	width: 800px;
	padding: 10px;
	margin: 10% 25%;
	border: 1px solid ${UiKitDefaults.buttons.backgroundColor};
	${UiKitDefaults.mobile} {
		flex-direction: column;
	}
`

export const QuoteImg = styled.img`
	width: 30%;
	margin: 5px;
	${UiKitDefaults.mobile} {
		width: 70%;
	}
`
export const QuoteP = styled.p`
	width: 50%;
	padding: 5%;
	color: ${UiKitDefaults.textColor};

	&::first-letter {
		// dropCaps
		color: ${UiKitDefaults.dropCaps};
		font-size: 3.5rem;
		float: left;
		padding-right: 0.7rem;
		line-height: 60%;
		margin-top: 0.7rem;
		font-family: 'Josefin Sans';
	}
	${UiKitDefaults.mobile} {
		width: 70%;
	}
`

export const ContentWrapper = styled.div`
	display: flex;
	margin: 0% 25%;
	margin-left: 10vw;
	position: relative;
	.TextWrapper {
		display: flex;
		flex-direction: column;
		color: ${UiKitDefaults.textColor};
		text-align: justify;

		.firstP::first-letter {
			// dropCaps
			color: ${UiKitDefaults.dropCaps};
			font-size: 3.5rem;
			float: left;
			padding-right: 0.5rem;
			line-height: 70%;
			margin-top: 0.6rem;
			font-family: 'Josefin Sans';
			${UiKitDefaults.mobile} {
				margin-left: -0.3rem;
			}
		}
	}
	${UiKitDefaults.mobile} {
		margin: 0% 5%;
		flex-direction: column-reverse;
		align-items: center;
	}
`
export const Ul = styled.ul`
	width: 90%;
`
export const Title = styled.h2`
	padding-left: 0.7rem;
	text-transform: uppercase;

	letter-spacing: 5px;
	color: ${UiKitDefaults.highLightedText};
	font-family: 'Josefin Sans';
	${UiKitDefaults.mobile} {
		margin-left: 5vw;
		padding-left: 0;
	}
`
export const H4 = styled.h4`
	text-transform: uppercase;
	letter-spacing: 5px;
	font-family: 'Josefin Sans';
	color: ${UiKitDefaults.highLightedText};
`

export const ImgWrapp = styled.div`
	width: 100%;
	max-width: 118px;
	min-width: 50px;
	height: 100%;
	padding: 2%;
	position: absolute;
	transform: translateX(100%);
	margin-right: -2vw;
	right: 0;
	.img {
		width: 100%;
	}
	${UiKitDefaults.mobile} {
		transform: none;
		position: relative;
	}
`

export const ImgWrappOnLine = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	.img {
		margin: 2vw 2vw;
		width: 100%;
	}
	${UiKitDefaults.mobile} {
	}
`
export const ContentWrapperOnLine = styled.div`
	display: flex;
	margin: 0% 25%;
	flex-direction: column;
	margin-left: 10vw;
	position: relative;
	.TextWrapper {
		display: flex;
		flex-direction: column;

		color: ${UiKitDefaults.textColor};
		text-align: justify;

		.firstP::first-letter {
			// dropCaps
			color: ${UiKitDefaults.dropCaps};
			font-size: 3.5rem;
			float: left;
			padding-right: 0.5rem;
			line-height: 70%;
			margin-top: 0.6rem;
			font-family: 'Josefin Sans';
		}
	}
	${UiKitDefaults.mobile} {
		margin: 0% 5%;
	}
`
