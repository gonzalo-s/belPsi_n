import styled, { createGlobalStyle } from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const GlobalStyle = createGlobalStyle`
body{
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	line-height: 1.6;
	font-size: 18px;
	min-height: 100%;
}
`

export const Container = styled.div``

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const Main = styled.div``

export const PageContentWrap = styled.div`
	flex: 1;
`

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
	width: 1000px;
	padding: 10px;
	margin: 10vw;
	border: 2px solid #846877;
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
	${UiKitDefaults.mobile} {
		width: 70%;
	}
`
