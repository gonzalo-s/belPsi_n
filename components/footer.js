import NextLink from 'next/link'
import { useRouter } from 'next/router'
import LinksDb from './LinksDb'
import ChatContact from '../components/chatContact'
import { Box, Stack, VStack, Text, Link } from '@chakra-ui/react'

function Footer() {
	const router = useRouter()

	return (
		<VStack w="60%">
			<ChatContact />
			<Stack
				direction="row"
				wrap="wrap"
				className="top"
				w="100%"
				justifyContent="space-around"
			>
				<VStack alignItems="flex-start">
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
										<Text>{item.text}</Text>
									</Link>
								</NextLink>
							</Box>
						)
					})}
				</VStack>
				<VStack alignItems="flex-start">
					{LinksDb.footerExtra.map((item, i) => {
						return (
							<Box display="flex">
								<NextLink key={i} href={item.link} passHref>
									<Link
										pl="1rem"
										pr="1rem"
										_hover={{
											boxShadow: 'none',
											color: '#FFC0CB',
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
			<Box className="bottom">Copyright</Box>
		</VStack>
	)
}
export default Footer
