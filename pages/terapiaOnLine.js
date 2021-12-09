import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Box,
	VStack,
	HStack,
	Heading,
	Text,
	UnorderedList,
	listItem,
	Image,
} from '@chakra-ui/react'

export default function Online() {
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
					className="mainWrapper"
					justifyContent="space-between"
					backgroundColor="violet"
					w="100%"
				>
					<Box
						display="flex"
						justifyContent="start"
						w="70%"
						pt="2rem"
					>
						<Heading as="h1" size="lg" letterSpacing="0.2rem">
							¿Que es la terapia On-Line?
						</Heading>
					</Box>

					<Box
						className="contentWapper"
						display="flex"
						flexDirection="column"
						border="1px"
						w="50%"
					>
						<Box boxSize="lg" h="100%" w="100%" p="2rem">
							<Image
								borderRadius="5px"
								className="img"
								src={'notebook 640×426px.jpg'}
								alt="notebook"
							/>
						</Box>
						<Text p="2rem">
							La terapia On-Line consiste en sesiones de terapia
							psicológica con un terapeuta especializado a través
							de un celular, tablet o computadora realizando una
							video llamada por whatsapp , zoom o Skype.
						</Text>
						<VStack alignItems="start">
							<Heading as="h4" size="md" letterSpacing="0.2rem">
								Algunas ventajas de la terapia
							</Heading>
							<Heading as="h4" size="md" letterSpacing="0.2rem">
								On-Line
							</Heading>
						</VStack>
						<UnorderedList p="2em">
							<li>Ahorro de tiempo.</li>
							<li>Ahorro económico.</li>
							<li>Flexibilidad horaria para coordinar turnos.</li>
							<li>
								Facilidad para personas con limitaciones
								físicas.
							</li>
							<li>Comodidad.</li>
							<li>Trabajar desde un ambiente conocido.</li>
						</UnorderedList>
					</Box>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
