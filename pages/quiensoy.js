import React from 'react'
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
	useColorModeValue,
} from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}

export default function About() {
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
						pt="2rem"
						w="70%"
					>
						<Heading as="h1" size="lg" letterSpacing="0.2rem">
							Quien Soy
						</Heading>
					</Box>

					<HStack className="aboutMe" justifyContent="center">
						<Box
							className="TextWrapper"
							display="flex"
							flexDirection="column"
							w={['95%', '80%', '70%', '60%', '50%']}
						>
							<Box display="flex" flexDir="row" p="2em">
								<Text>
									Mi nombre es María Belén Sica, soy
									Licenciada en Psicología, egresada de la
									Universidad del Salvador (Buenos Aires,
									Argentina) A lo largo de mi carrera me
									desempeñe como psicóloga clínica en
									distintas Instituciones en el ámbito público
									y privado; atendiendo niños, adolescentes y
									adultos.
								</Text>
							</Box>
							<Heading as="h4" size="md" letterSpacing="0.2rem">
								FORMACION
							</Heading>
							<UnorderedList p="2em">
								<li>
									Perito Oficial del Poder Judicial de la
									Provincia de Buenos Aires.
								</li>
								<li>
									Concurrente “Laboratorio clínico: cuerpo y
									goce".
								</li>
								<li>
									Curso de A.P.A-“Avatares de las
									psicoterapias y del terapeuta en el hospital
									de pediatría. Desafíos de la clínica
									actual".
								</li>
								<li>
									Concurrente “Clínica del niño y su familia”,
									Hospital Materno Infantil Dr. Carlos
									Gianantonio.
								</li>
								<li>
									Concurrente en “ 3er Jornada Científica del
									Hospital Materno Infantil de San isidro en
									la Semana del Prematuro”.
								</li>
								<li>
									Concurrente Jornadas Hospitalarias de
									Psicología “Los Cuerpos…¿El cuerpo?”. Área
									de Psicología. Hospital Municipal Materno
									Infantil de San Isidro “Dr. Carlos
									Gianantonio.
								</li>
								<li>
									Concurrente a las XIV Jornada: “Sitios de
									Subjetivación en Niñez y Adolescencia”.
									Secretaría de Extensión. FacUnorderedListtad
									de Psicología. U.B.A
								</li>
								<li>
									Concurrente “La práctica analítica en la
									clínica de la urgencia”. Hospital Zonal de
									Agudos Magdalena V. De Martínez.
								</li>
							</UnorderedList>
						</Box>
					</HStack>
				</VStack>
				<Footer />
			</VStack>
		</VStack>
	)
}
