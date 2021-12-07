import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'
import { VStack, Image, Wrap, WrapItem, Text } from '@chakra-ui/react'

export default function Contact() {
	return (
		<VStack background="red">
			<Head>
				<title>LIC MBS</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<VStack
				pt="1vh"
				pb="1vh"
				className="fullWrapper"
				background="green"
				w="70%"
				minH="100vh"
				h="100%"
				justifyContent="space-between"
			>
				<Navbar />
				<VStack
					className="mainWrapper"
					justifyContent="center"
					backgroundColor="violet"
					border="1px"
					w="100%"
					h="80vh"
				>
					<ContactForm />
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
