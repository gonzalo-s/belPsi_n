import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {
	Container,
	PageContainer,
	PageContentWrap,
	Main,
} from '../components/ui/uiKit'
import { Title, H4, Ul, ContentWrapper, ImgWrapp } from '../components/ui/uiKit'
import TratamientosData from '../components/TxtDb'

export default function Services() {
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
						<Title>Tratamientos</Title>
						<ContentWrapper className="contentWapper">
							<div className="TextWrapper">
								<p className="firstP">
									Tratamientos orientados a niños,
									adolescentes y adultos.
								</p>

								<H4>¿Cuando consultar?</H4>
								<Ul className="ul">
									{TratamientosData.map((tratamiento, i) => {
										return (
											<li key={i}>{tratamiento.text}</li>
										)
									})}
								</Ul>
							</div>
						</ContentWrapper>
					</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
