import React, { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import LinksDb from './LinksDb'
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	useColorModeValue,
	useColorMode,
	useOutsideClick,
	useBreakpointValue,
	Stack,
	Text,
	Link,
	Fade,
} from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}

function Navbar() {
	const [menuState, setMenuState] = useState(false)
	const [variantState, setVariantState] = useState('xl')
	const { colorMode, toggleColorMode } = useColorMode()
	const bg = useColorModeValue(customColors.lightBg, customColors.darkBg)
	const selected = useColorModeValue(
		customColors.color.links.selected.light,
		customColors.color.links.selected.dark
	)
	const hover = useColorModeValue(
		customColors.color.links.hover.light,
		customColors.color.links.hover.dark
	)
	const specialColor = useColorModeValue(
		customColors.color.specialLightColor,
		customColors.color.specialDarkColor
	)
	const mobileBg = useColorModeValue(
		customColors.bg.mobile.light,
		customColors.bg.mobile.dark
	)

	const ref = React.useRef()
	useOutsideClick({
		ref: ref,
		handler: () => setMenuState(false),
	})

	let variant = useBreakpointValue({
		xl: 'xl',
	})
	if (variantState != variant) {
		setVariantState(variant)
		console.log('dif')
		if (variant != 'xl') {
			setMenuState(false)
		}
	}

	if (!menuState && variant === 'xl') {
		return setMenuState(true)
	}
	function handleToggleMenu() {
		if (menuState) {
			setMenuState(!menuState)
		} else {
			setMenuState(!menuState)
		}
	}

	const router = useRouter()

	//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}
	return (
		<Stack
			className="navbarWrapper"
			w="100%"
			h="3rem"
			direction={['column', 'column', 'column', 'column', 'row']}
			alignItems={[
				'flex-end',
				'flex-end',
				'flex-end',
				'flex-end',
				'flex-start',
			]}
		>
			<Box
				ref={ref}
				className="mobileWrapper"
				borderBottom="1px"
				borderColor="purple.100"
				bg={[mobileBg, mobileBg, bg, bg, bg]}
				display="flex"
				position={['fixed', 'fixed', 'fixed', 'fixed', 'static']}
				top="0"
				w={['100%', '100%', '90%', '80%', '100%']}
				h="3rem"
				justifyContent={[
					'flex-end',
					'flex-end',
					'flex-end',
					'flex-end',
					'space-between',
				]}
				alignItems={['center', 'center', 'center', 'center', 'stretch']}
			>
				<Box
					className="licMbsWrapper"
					display="flex"
					w="30%"
					h="100%"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						display="flex"
						w="20em"
						direction="row"
						justifyContent="center"
						//pt="13px"
						alignContent="center"
						//h="100%"
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
								color={specialColor}
								letterSpacing="0.3rem"
							>
								<Text fontSize="xl">LIC MBS</Text>
							</Link>
						</NextLink>
					</Box>
				</Box>
				<Box
					className="hamMenu"
					as="button"
					onClick={handleToggleMenu}
					cursor="pointer"
					display={['flex', 'flex', 'flex', 'flex', 'none']}
					position={[
						'relative',
						'relative',
						'relative',
						'relative',
						'static',
					]}
					top="0"
					right="5px"
					boxSize="40px"
				>
					{menuState ? (
						<CloseIcon
							boxSize="30px"
							p="5px"
							position="absolute"
							top="5px"
							left="5px"
						/>
					) : (
						<HamburgerIcon
							boxSize="30px"
							position="absolute"
							top="5px"
							left="5px"
						/>
					)}
				</Box>

				<Fade in={menuState} unmountOnExit="true" offsetY="-50px">
					<Stack
						className="menuWrapper"
						bg={[mobileBg, mobileBg, bg, bg, bg]}
						direction={[
							'column',
							'column',
							'column',
							'column',
							'row',
						]}
						alignItems={[
							'start',
							'start',
							'start',
							'start',
							'center',
						]}
						w={['15rem', '15rem', '15rem', '15rem', '2xl']}
						justify="space-around"
						h={['25rem', '25rem', '25rem', '25rem', '100%']}
						top={['3rem', '3rem', '3rem', '3rem', 'none']}
						right="0"
						position={[
							'absolute',
							'absolute',
							'absolute',
							'absolute',
							'static',
						]}
						pb={['2rem', '2rem', '2rem', '2rem', '0']}
					>
						{LinksDb.menu.map((item, i) => {
							return (
								<Box display="flex" key={i} alignItems="center">
									<NextLink href={item.link} passHref>
										<Link
											pl="1rem"
											pr="1rem"
											w="100%"
											color={
												router.asPath === item.link
													? selected
													: ''
											}
											fontWeight={
												router.asPath === item.link
													? 'bold'
													: ''
											}
											_hover={{
												boxShadow: 'none',
												color: hover,
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
						<Button
							size="sm"
							variant="ghost"
							position={[
								'absolute',
								'absolute',
								'absolute',
								'absolute',
								'static',
							]}
							right="0%"
							top="0"
							onClick={toggleColorMode}
							colorScheme="purple"
							_focus={{
								boxShadow: 'none',
							}}
						>
							{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
						</Button>
					</Stack>
				</Fade>
			</Box>
		</Stack>
	)
}
export default Navbar
