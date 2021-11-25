import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { VStack, Image, Wrap, WrapItem, Text } from '@chakra-ui/react'

import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
	Title,
	H4,
	Ul,
	ContentWrapperOnLine,
	ImgWrappOnLine,
} from '../components/ui/uiKit'

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
				w="70vw"
				h="100vh"
				border="2px"
				justifyContent="space-between"
			>
				<Navbar />
				<VStack className="mainWrapper">
					<Title>¿QUE ES LA TERAPIA ONLINE?</Title>
					<ContentWrapperOnLine className="WrapperOnLine">
						<ImgWrappOnLine>
							<img
								className="img"
								src={'notebook 640×426px.jpg'}
								alt="notebook"
							/>
						</ImgWrappOnLine>
						<div className="TextWrapper">
							<p className="firstP">
								La terapia online consiste en sesiones de
								terapia psicológica con un terapeuta
								especializado a través de un celular, tablet o
								computadora realizando una video llamada por
								whatsapp , zoom o Skype.
							</p>

							<H4>ALGUNAS VENTAJAS DE LA TERAPIA ONLINE</H4>
							<Ul className="ul">
								<li>Ahorro de tiempo.</li>
								<li>Ahorro económico.</li>
								<li>
									Flexibilidad horaria para coordinar turnos.
								</li>
								<li>
									Facilidad para personas con limitaciones
									físicas.
								</li>
								<li>Comodidad.</li>
								<li>Trabajar desde un ambiente conocido.</li>
							</Ul>
						</div>
					</ContentWrapperOnLine>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
