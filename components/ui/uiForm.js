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
	background: #5d4954;
	padding: 1%;
	color: white;
`
export const Label = styled.label`
	display: flex;
	flex-direction: row;
	color: white;
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
