//import '../styles/globals.css'
import { GlobalStyle } from '../components/ui/uiKit'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<GlobalStyle />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
