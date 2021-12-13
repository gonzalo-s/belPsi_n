import NextLink from 'next/link'
import { useRouter } from 'next/router'
import LinksDb from './LinksDb'
import ChatContact from '../components/chatContact'
import {
	Box,
	useColorModeValue,
	Stack,
	VStack,
	Text,
	Link,
} from '@chakra-ui/react'
import { customColors } from '../themes/customColors'

//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}

function Footer() {
	const router = useRouter()
	const bg = useColorModeValue(customColors.lightBg, customColors.darkBg)
	const selected = useColorModeValue(
		customColors.color.links.selected.light,
		customColors.color.links.selected.dark
	)
	const hover = useColorModeValue(
		customColors.color.links.hover.light,
		customColors.color.links.hover.dark
	)
	return (
		<VStack w="60%" borderTop="1px" borderColor="purple.100" bg={bg}>
			<ChatContact />
			<Stack
				direction="row"
				wrap="wrap"
				className="top"
				w="100%"
				justifyContent={[
					'center',
					'center',
					'space-around',
					'space-around',
					'space-around',
				]}
			>
				<VStack alignItems="flex-start" pl="3rem" pb="1rem">
					{LinksDb.menu.map((item, i) => {
						return (
							<Box display="flex" key={i}>
								<NextLink href={item.link} passHref>
									<Link
										pl="1rem"
										pr="1rem"
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
										<Text>{item.text}</Text>
									</Link>
								</NextLink>
							</Box>
						)
					})}
				</VStack>
				<VStack
					alignItems="flex-start"
					display={['none', 'none', 'flex', 'flex', 'flex']}
				>
					{LinksDb.footerExtra.map((item, i) => {
						return (
							<Box key={i}>
								<NextLink href={item.link} passHref>
									<Link
										pl="1rem"
										pr="1rem"
										_hover={{
											boxShadow: 'none',
											color: hover,
										}}
										_focus={{
											boxShadow: 'none',
										}}
									>
										<Text>{item.text}</Text>
									</Link>
								</NextLink>
							</Box>
						)
					})}
				</VStack>
			</Stack>
			<Box pt="0.5rem" fontWeight="100" className="bottom">
				Copyright
			</Box>
		</VStack>
	)
}
export default Footer
