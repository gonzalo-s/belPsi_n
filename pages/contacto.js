import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'

export default function Contact() {
	return (
		<Container>
			<Head>
				<title>LIC MBS</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<PageContainer>
				<PageContentWrap>
					<Navbar />
					<Main>
						<ContactForm />
					</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
