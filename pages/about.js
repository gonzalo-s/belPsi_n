import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'

export default function About() {
	return (
		<Container>
			<Head>
				<title>Lic M.B.S</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<PageContainer>
				<PageContentWrap>
					<Navbar />
					<Main>Quien Soy</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
