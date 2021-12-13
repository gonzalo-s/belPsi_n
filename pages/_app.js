import { myTheme } from '../themes/theme'

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<ChakraProvider resetCSS theme={myTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</div>
	)
}

export default MyApp
