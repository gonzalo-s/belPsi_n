import React, { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import LinksDb from './LinksDb'
import { CgMenu, CgClose } from 'react-icons/cg'
import { Box, Stack, HStack, Text, Link } from '@chakra-ui/react'

function Navbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	const [hamIsVisible, setHamIsVisible] = useState(false)

	const router = useRouter()
	function handleMenuClick() {
		setDisplayMenu(!displayMenu)
	}

	const visibleHam = (
		<Box
			onClick={handleMenuClick}
			cursor="pointer"
			displayMenu={displayMenu}
			handleMenuClick={handleMenuClick}
			p="0.5rem"
		>
			{displayMenu ? (
				<CgClose className="menu" />
			) : (
				<CgMenu className="menu" />
			)}
		</Box>
	)

	return (
		<HStack w="100%" h="2rem">
			{hamIsVisible ? visibleHam : ''}
			<Box
				display="flex"
				className="logoLink"
				w="30%"
				h="100%"
				justifyContent="end"
			>
				<Box
					display="flex"
					w="50%"
					direction="row"
					justifyContent="center"
					pt="4px"
				>
					<NextLink href={LinksDb.menu[0].link} passHref>
						<Link
							_hover={{
								boxShadow: 'none',
							}}
							_focus={{
								boxShadow: 'none',
							}}
							fontSize="md"
							color="#3C403D"
							letterSpacing="0.3rem"
						>
							<Text>LIC MBS</Text>
						</Link>
					</NextLink>
				</Box>
			</Box>

			<Stack
				direction="row"
				displayMenu={displayMenu}
				className="menu"
				w="70%"
				justify="space-around"
				h="100%"
				pt="4px"
			>
				{LinksDb.menu.map((item, i) => {
					return (
						<Box display="flex">
							<NextLink key={i} href={item.link} passHref>
								<Link
									pl="1rem"
									pr="1rem"
									color={
										router.asPath === item.link
											? '#FFC0CB'
											: ''
									}
									_hover={{
										boxShadow: 'none',
										color: '#FFC0CB',
									}}
									_focus={{
										boxShadow: 'none',
									}}
								>
									<Text> {item.text}</Text>
								</Link>
							</NextLink>
						</Box>
					)
				})}
			</Stack>
		</HStack>
	)
}
export default Navbar
