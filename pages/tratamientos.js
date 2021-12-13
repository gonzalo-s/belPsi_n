import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TratamientosData from '../components/TxtDb'
import {
	VStack,
	Box,
	Text,
	Heading,
	UnorderedList,
	useColorModeValue,
} from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

export default function Services() {
	const bg = useColorModeValue(customColors.lightBg, customColors.darkBg)
	return (
		<VStack bg={bg}>
			<Head>
				<title>LIC MBS</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<VStack
				pt="1vh"
				pb="1vh"
				className="fullWrapper"
				w={['100%', '100%', '90%', '80%', '70%']}
				minH="100vh"
				h="100%"
				justifyContent="space-between"
			>
				<Navbar />

				<VStack
					className="mainWrapper"
					justifyContent="space-between"
					w="100%"
				>
					<Box
						display="flex"
						justifyContent="start"
						w="70%"
						pt="2rem"
					>
						<Heading as="h1" size="lg" letterSpacing="0.2rem">
							Tratamientos
						</Heading>
					</Box>

					<Box
						className="TextWrapper"
						display="flex"
						flexDirection="column"
						w={['95%', '80%', '70%', '60%', '50%']}
					>
						<Text p="2rem">
							Tratamientos orientados a niños, adolescentes y
							adultos.
						</Text>

						<Heading as="h4" size="md" letterSpacing="0.2rem">
							¿Cuando consultar?
						</Heading>
						<UnorderedList p="2em">
							{TratamientosData.map((tratamiento, i) => {
								return <li key={i}>{tratamiento.text}</li>
							})}
						</UnorderedList>
					</Box>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
