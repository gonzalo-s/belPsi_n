import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	VStack,
	Image,
	Wrap,
	WrapItem,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

export default function Home() {
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
				<Wrap
					border="2px"
					justify="space-around"
					align="center"
					w={['95%', '90%', '90%', '80%', '70%']}
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
								"Todo puede serle arrebatado a un hombre, menos
								la última de las libertades humanas: el elegir
								su actitud en una serie de circunstancias."
							</Text>
							<Text w="20em" h="2em" align="end">
								Viktor Frankl
							</Text>
						</VStack>
					</WrapItem>
				</Wrap>
				<Footer />
			</VStack>
		</VStack>
	)
}
