import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
	QuoteWithImg,
	QuoteImg,
	QuoteP,
	QuoteWrapper,
} from '../components/ui/uiKit'

//import { useMediaQuery } from 'react-responsive'

export default function Home() {
	// let isDesktop = useMediaQuery({
	// 	query: '(min-width: 920px)',
	// })

	return (
		<Container>
			<Head>
				<title>Lic M.B.S</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<PageContainer>
				<PageContentWrap>
					<Navbar />
					<Main>
						<QuoteWithImg>
							<QuoteWrapper>
								<QuoteImg
									src={'./calm-1919x1390.jpg'}
									alt="Calma"
								/>
								<QuoteP as="i">
									"Todo puede serle arrebatado a un hombre,
									menos la última de las libertades humanas:
									el elegir su actitud en una serie de
									circunstancias." Viktor Frankl
								</QuoteP>
							</QuoteWrapper>
						</QuoteWithImg>
					</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
