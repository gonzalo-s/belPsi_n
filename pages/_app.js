//import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</div>
	)
}

export default MyApp
