import styled, { createGlobalStyle } from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const Button = styled.button`
	width: 80%;
	height: 20%;
	margin-left: 10%;
	margin-top: 2%;
	cursor: pointer;
	background-color: ${UiKitDefaults.buttons.backgroundColor};
	border: none;
	color: white;
	font-size: 18px;

	&:hover {
		background-color: #877180;
		color: ${UiKitDefaults.hover.color};
	}
`
export const Input = styled.input`
	border: none;
`
export const Textarea = styled.textarea`
	//pongo solo para probar pasar props
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '100px')};
`

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
