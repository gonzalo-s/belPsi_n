import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import {
// 	Container,
// 	PageContainer,
// 	PageContentWrap,
// 	Main,
// 	QuoteWithImg,
// 	QuoteImg,
// 	QuoteP,
// 	QuoteWrapper,
// } from '../components/ui/uiKit'
import { VStack, Image, Wrap, WrapItem, Text } from '@chakra-ui/react'
export default function Home() {
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
				w="70vw"
				h="100vh"
				border="2px"
				justifyContent="space-between"
			>
				<Navbar />
				<VStack className="mainWrapper">
					<Wrap
						border="2px"
						justify="space-around"
						align="center"
						w="50vw"
						p="15px"
					>
						<WrapItem>
							<Image
								src={'./calm-1919x1390.jpg'}
								alt="Calma"
								boxSize="30vh"
							/>
						</WrapItem>
						<WrapItem>
							<VStack>
								<Text as="i" w="20em" h="6em">
									"Todo puede serle arrebatado a un hombre,
									menos la última de las libertades humanas:
									el elegir su actitud en una serie de
									circunstancias."
								</Text>
								<Text w="20em" h="2em" align="end">
									Viktor Frankl
								</Text>
							</VStack>
						</WrapItem>
					</Wrap>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
