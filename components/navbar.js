import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import LinksDb from './LinksDb'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Stack, Text, Link, Fade } from '@chakra-ui/react'
//import { useDisclosure } from '@chakra-ui/react'
import { useBoolean, useBreakpointValue } from '@chakra-ui/react'

function Navbar() {
	const [menuState, setMenuState] = useState(false)

	let variant = useBreakpointValue({
		xl: 'xl',
	})

	if (!menuState && variant === 'xl') {
		return setMenuState(true)
	}
	function handleToggleMenu() {
		setMenuState(!menuState)
	}
	console.log(menuState)
	console.log(variant)

	const router = useRouter()

	const dirColumnMobile = ['column', 'column', 'column', 'column', 'row']
	//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}
	return (
		<Stack
			className="navbarWrapper"
			w="100%"
			h="3rem"
			direction={dirColumnMobile}
			alignItems={[
				'flex-end',
				'flex-end',
				'flex-end',
				'flex-end',
				'flex-start',
			]}
			backgroundColor="violet"
		>
			<Box
				className="mobileWrapper"
				position={['fixed', 'fixed', 'fixed', 'fixed', 'static']}
				display="flex"
				w={['70%', '70%', '70%', '70%', '100%']}
				h="3rem"
				backgroundColor="orange"
				justifyContent={[
					'flex-end',
					'flex-end',
					'flex-end',
					'flex-end',
					'space-between',
				]}
			>
				<Box
					className="hamMenu"
					as="button"
					onClick={handleToggleMenu}
					cursor="pointer"
					p="0.5rem"
					display={['flex', 'flex', 'flex', 'flex', 'none']}
					position={['fixed', 'fixed', 'fixed', 'fixed', 'static']}
				>
					<Fade in={!menuState} unmountOnExit="true">
						<HamburgerIcon
							boxSize="30px"
							position="fixed"
							right="16%"
						/>
					</Fade>
					<Fade in={menuState} unmountOnExit="true">
						<CloseIcon
							boxSize="30px"
							p="5px"
							position="fixed"
							right="16%"
						/>
					</Fade>
				</Box>
				<Box
					className="licMbsWrapper"
					display={['none', 'none', 'none', 'none', 'flex']}
					w="30%"
					h="100%"
					justifyContent="end"
				>
					<Box
						display="flex"
						w="50%"
						direction="row"
						justifyContent="center"
						pt="13px"
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

				<Fade in={menuState} unmountOnExit="true" offsetY="-50px">
					<Stack
						className="menuWrapper"
						direction={dirColumnMobile}
						w={['15rem', '15rem', '15rem', '15rem', '2xl']}
						justify="space-around"
						h={['15rem', '15rem', '15rem', '15rem', '100%']}
						pt="13px"
						top={['3rem', '3rem', '3rem', '3rem', 'none']}
						right="15%"
						backgroundColor="yellow"
						position={[
							'fixed',
							'fixed',
							'fixed',
							'fixed',
							'static',
						]}
					>
						{LinksDb.menu.map((item, i) => {
							return (
								<Box display="flex" key={i}>
									<NextLink href={item.link} passHref>
										<Link
											pl="1rem"
											pr="1rem"
											w="100%"
											color={
												router.asPath === item.link
													? 'pink.100'
													: ''
											}
											_hover={{
												boxShadow: 'none',
												color: 'pink.100',
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
				</Fade>
			</Box>
		</Stack>
	)
}
export default Navbar
