import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/ContactForm.module.css'
import { useMediaQuery } from 'react-responsive'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Loading from '../components/Loading'
import axios from 'axios'
import { Button, Input, Textarea } from './ui/uiKit'

function ContactForm() {
	const { register, handleSubmit, errors } = useForm()
	const [isLoading, setIsLoading] = useState(false)
	console.log(isLoading)
	//TODO: check ctrl+f5 sets style to mobile allways

	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	function onSubmit(data, e) {
		console.log(data)
		let newData = { ...data, message: data.consulta }
		delete newData.consulta
		console.log('newData', newData)
		setIsLoading(true)
		//console.log(isLoading)

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
				console.log('Success:', data)
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
		<div className={styles.formWrapper}>
			<div>{isLoading ? <Loading /> : ''}</div>
			<form
				className={
					isDesktop ? styles.contactForm : styles.mobileContactForm
				}
				onSubmit={handleSubmit(onSubmit)}
			>
				<label>
					Nombre:&nbsp;
					<span className={styles.error}>
						{errors?.name?.message}
					</span>
				</label>

				<Input
					name="name"
					placeholder="Nombre"
					ref={register({
						required: { value: true, message: 'Ingresar Nombre' },
						minLength: {
							value: 3,
							message: 'Ingresar al menos 3 caracteres',
						},
					})}
				></Input>

				<label>
					Email:&nbsp;
					<span className={styles.error}>
						{errors?.replyTo?.message}
					</span>
				</label>
				<Input
					name="replyTo"
					placeholder="Email"
					ref={register({
						required: { value: true, message: 'Ingresar Email' },
						pattern: {
							value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/,
							message: 'Ingresar Email válido',
						},
					})}
				></Input>

				<label>
					Teléfono:&nbsp;
					<span className={styles.error}>
						{errors?.phone?.message}
					</span>
				</label>
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

				<label>
					Consulta:&nbsp;
					<span className={styles.error}>
						{errors?.consulta?.message}
					</span>
				</label>
				<Textarea
					minHeight={'100px'}
					name="consulta"
					ref={register({
						required: { value: true, message: 'Ingresar consulta' },
						minLength: {
							value: 10,
							message: 'Ingresar al menos 10 caracteres',
						},
					})}
				></Textarea>

				{/* <input
					className={
						isDesktop ? styles.submitBtn : styles.mobileSubmitBtn
					}
					type="submit"
					value="Enviar"
				/> */}
				<Button type="submit">Enviar</Button>
			</form>
		</div>
	)
}
export default ContactForm
