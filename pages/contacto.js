import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'
import { VStack, Box, useColorModeValue } from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

export default function Contact() {
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
				bg={bg}
			>
				<Navbar />
				<VStack
					className="mainWrapper"
					justifyContent="center"
					w="100%"
					h="100%"
				>
					<Box display="flex" w="100%" p="20px">
						<ContactForm />
					</Box>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
