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
import { VStack, Image, Wrap, WrapItem, Text } from '@chakra-ui/react'

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
				w="70vw"
				h="100vh"
				border="2px"
				justifyContent="space-between"
			>
				<Navbar />
				<VStack className="mainWrapper">
					<Title>Tratamientos</Title>
					<ContentWrapper className="contentWapper">
						<div className="TextWrapper">
							<p className="firstP">
								Tratamientos orientados a niños, adolescentes y
								adultos.
							</p>

							<H4>¿Cuando consultar?</H4>
							<Ul className="ul">
								{TratamientosData.map((tratamiento, i) => {
									return <li key={i}>{tratamiento.text}</li>
								})}
							</Ul>
						</div>
					</ContentWrapper>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
