import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'
import {
	Title,
	H4,
	Ul,
	ContentWrapperOnLine,
	ImgWrapp,
	QuoteImg,
	ImgWrappOnLine,
} from '../components/ui/uiKit'

export default function Online() {
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
						<Title>¿Que es la terapia on-line?</Title>
						<ImgWrappOnLine>
							<img
								className="img"
								src={'notebook 640×426px.jpg'}
								alt="computadora y cafe"
							/>
						</ImgWrappOnLine>
						<ContentWrapperOnLine className="OnLineWrapper">
							<div className="TextWrapper">
								<p className="firstP">
									La terapia online es fundamentalmente
									psicoterapia tradicional pero a distancia ,
									utilizando las ventajas y los recursos
									tecnologicos actuales.
								</p>
							</div>
						</ContentWrapperOnLine>
					</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
