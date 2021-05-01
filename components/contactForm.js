import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import Loading from '../components/Loading'
import axios from 'axios'
import {
	Button,
	Input,
	Textarea,
	FormWrapper,
	Form,
	Label,
	ErrorLabel,
	InputWrapper,
	TextInputWrapper,
} from './ui/uiForm'

function ContactForm() {
	const { register, handleSubmit, errors } = useForm()
	const [isLoading, setIsLoading] = useState(false)
	//TODO: check ctrl+f5 sets style to mobile allways

	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	function onSubmit(data, e) {
		let newData = { ...data, message: data.consulta }
		delete newData.consulta
		setIsLoading(true)

		axios
			.post('http://localhost:3000/api/mail', JSON.stringify(newData))
			.then((res) => {
				// res.data.msg
			})
			.catch((res) => {
				//
			})

		fetch('http://localhost:3000/api/mail', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newData),
			//Loading Page
		})
			.then((response) => response.json())
			.then((data) => {
				// if no errors in data SHOW success message
				if (data.msg != undefined) {
					// show success page
					alert('Message sent!!')
					e.target.reset()
				} else {
					//Show error message
					alert('Something went wrong with the server')
				}
			})
			.catch((error) => {
				// show error message
				//setIsLoading(false)
				alert(
					'Error al intentar enviar el mensaje, intentelo nuevamente!'
				)
				console.error('Error:', error)
			})
		//e.target.reset()
		setIsLoading(false)
	}

	function handlePlaceholder() {}
	//const data = { username: 'example' };

	return (
		<FormWrapper>
			<div>{isLoading ? <Loading /> : ''}</div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputWrapper>
					<Label>
						Nombre:&nbsp;
						<ErrorLabel>{errors?.name?.message}</ErrorLabel>
					</Label>

					<Input
						name="name"
						placeholder="Nombre"
						ref={register({
							required: {
								value: true,
								message: 'Ingresar Nombre',
							},
							minLength: {
								value: 3,
								message: 'Ingresar al menos 3 caracteres',
							},
						})}
					></Input>
				</InputWrapper>
				<InputWrapper>
					<Label>
						Email:&nbsp;
						<ErrorLabel>{errors?.replyTo?.message}</ErrorLabel>
					</Label>
					<Input
						name="replyTo"
						placeholder="Email"
						ref={register({
							required: {
								value: true,
								message: 'Ingresar Email',
							},
							pattern: {
								value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/,
								message: 'Ingresar Email válido',
							},
						})}
					></Input>
				</InputWrapper>
				<InputWrapper>
					<Label>
						Teléfono:&nbsp;
						<ErrorLabel>{errors?.phone?.message}</ErrorLabel>
					</Label>
					<Input
						name="phone"
						placeholder="011 2222 3333"
						ref={register({
							pattern: {
								value: /[0-9+]{2}/,
								message: 'Ingresar Nro de telefono válido',
							},
						})}
					></Input>
				</InputWrapper>
				<TextInputWrapper>
					<Label>
						Consulta:&nbsp;
						<ErrorLabel>{errors?.consulta?.message}</ErrorLabel>
					</Label>

					<Textarea
						name="consulta"
						ref={register({
							required: {
								value: true,
								message: 'Ingresar consulta',
							},
							minLength: {
								value: 10,
								message: 'Ingresar al menos 10 caracteres',
							},
						})}
					></Textarea>
				</TextInputWrapper>
				<Button type="submit">Enviar</Button>
			</Form>
		</FormWrapper>
	)
}
export default ContactForm
