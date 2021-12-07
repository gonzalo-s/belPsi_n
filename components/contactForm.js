import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import Loading from '../components/Loading'
import axios from 'axios'

import {
	Input,
	Text,
	Textarea,
	Button,
	Box,
	VStack,
	HStack,
} from '@chakra-ui/react'

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

	return (
		<Box display="flex" justifyContent="center">
			<div>{isLoading ? <Loading /> : ''}</div>
			<Box
				m="5px"
				display="flex"
				minH="50vh"
				minW="50vw"
				justifyContent="center"
				border="1px"
				borderRadius="0.5rem"
			>
				<VStack
					display="flex"
					justifyContent="space-evenly"
					alignItems="stretch"
					w="90%"
				>
					<VStack alignItems="start">
						<HStack p="0.4rem" pt="1rem">
							<Text>Nombre:</Text>
							<Text fontSize="sm" color="red">
								{errors?.name?.message}
							</Text>
						</HStack>
						<Input
							type="text"
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
					</VStack>
					<VStack alignItems="start">
						<HStack p="0.4rem" pt="1rem">
							<Text>Email:</Text>
							<Text fontSize="sm" color="red">
								{errors?.replyTo?.message}
							</Text>
						</HStack>
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
					</VStack>
					<VStack alignItems="start">
						<HStack p="0.4rem" pt="1rem">
							<Text>Teléfono:</Text>
							<Text fontSize="sm" color="red">
								{errors?.phone?.message}
							</Text>
						</HStack>
						<Input
							type="tel"
							name="phone"
							placeholder="011 2222 3333"
							ref={register({
								pattern: {
									value: /^[0-9]{5,}$/,
									message: 'Ingresar Nro de telefono válido',
								},
							})}
						></Input>
					</VStack>
					<VStack alignItems="start">
						<HStack p="0.4rem" pt="1rem">
							<Text>Consulta:</Text>
							<Text fontSize="sm" color="red">
								{errors?.consulta?.message}
							</Text>
						</HStack>

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
					</VStack>
					<Box
						display="flex"
						h="5rem"
						alignItems="center"
						pb="2rem"
						pt="2rem"
						pl="1rem"
						pr="1rem"
					>
						<Button w="100%" onClick={handleSubmit(onSubmit)}>
							Enviar
						</Button>
					</Box>
				</VStack>
			</Box>
		</Box>
	)
}
export default ContactForm
