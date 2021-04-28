import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 50%;
	height: 100%;
	justify-content: center;
	margin-top: 5%;
	background: ${UiKitDefaults.form.backgroundColor};
	padding: 1%;
`
export const Label = styled.label`
	display: flex;
	flex-direction: row;
	color: ${UiKitDefaults.textColorLight};
`

export const ErrorLabel = styled.label`
	font-size: 15px;
	color: red;
`

export const Button = styled.button`
	width: 80%;
	height: 20%;
	margin-left: 10%;
	margin-top: 2%;
	cursor: pointer;
	background-color: ${UiKitDefaults.form.buttonBackgroundColor};
	border: none;
	color: ${UiKitDefaults.textColorLight};
	font-size: 18px;

	&:hover {
		background-color: ${UiKitDefaults.hover.color};
		color: ${UiKitDefaults.textColor};
	}
`
export const Input = styled.input`
	border: none;
`
export const Textarea = styled.textarea`
	//pongo solo para probar pasar props
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '100px')};
`
