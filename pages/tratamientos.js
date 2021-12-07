import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'
import { Title, H4, Ul, ContentWrapper, ImgWrapp } from '../components/ui/uiKit'
import TratamientosData from '../components/TxtDb'
import {
	VStack,
	Box,
	Image,
	Wrap,
	WrapItem,
	Text,
	Heading,
	UnorderedList,
} from '@chakra-ui/react'

export default function Services() {
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
					border="1px"
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
						className="contentWapper"
						display="flex"
						flexDirection="column"
						border="1px"
						w="50%"
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
