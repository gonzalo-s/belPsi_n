import styled from 'styled-components'
import { UiKitDefaults } from '../ui/uiDefaults'

export const FormWrapper = styled.div`
	display: flex;
	//flex-direction: column;
	justify-content: center;
	align-items: stretch;
	width: 100%;
	min-height: 450px;
	//min-height: 600px;
	//height: 60vh;
	//font-size: 1.5rem;
	//padding: 2rem;
	${UiKitDefaults.desktop} {
		padding-top: 5vh;
	}
`

export const Form = styled.form`
	display: flex;
	width: 90%;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: stretch;
	background-color: ${UiKitDefaults.form.backgroundColor};
	font-size: 1.25rem;
	${UiKitDefaults.desktop} {
		width: 70%;
		max-width: 720px;
		//margin-top: 10vh;
	}
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	height: 55px;
	padding: 0.2rem;
`
export const TextInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 150px;
	padding: 0.2rem;
`

export const Label = styled.label`
	display: flex;
	align-items: center;
	width: 100%;
	height: 1.25rem;
	color: ${UiKitDefaults.textColorLight};
`
export const Input = styled.input`
	font-size: 1.25rem;
	margin: 0 1rem;
	border: none;
	height: 100%;
`

export const ErrorLabel = styled.label`
	font-size: 1.25rem;
	color: red;
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0 1rem;
	height: 2.5rem;
	border: none;
	cursor: pointer;
	background-color: ${UiKitDefaults.form.buttonBackgroundColor};
	color: ${UiKitDefaults.buttons.color};
	font-size: 2rem;

	&:hover {
		background-color: ${UiKitDefaults.buttons.hover};
		color: ${UiKitDefaults.hover.color};
	}
`
export const Textarea = styled.textarea`
	height: 100%;
	font-size: 1.25rem;
	padding: 0;
	margin: 0 1rem;
	border: none;
`
