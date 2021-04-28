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

export default function About() {
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
						<Title>Quien Soy</Title>
						<ContentWrapper className="aboutMe">
							<div className="TextWrapper">
								<p className="firstP">
									Mi nombre es María Belén Sica, soy
									Licenciada en Psicología, egresada de la
									Universidad del Salvador (Buenos Aires,
									Argentina) A lo largo de mi carrera me
									desempeñe como psicóloga clínica en
									distintas Instituciones en el ámbito público
									y privado; atendiendo niños, adolescentes y
									adultos.
								</p>

								<H4>FORMACION</H4>
								<Ul className="ul">
									<li>
										Perito Oficial del Poder Judicial de la
										Provincia de Buenos Aires.
									</li>
									<li>
										Concurrente “Laboratorio clínico: cuerpo
										y goce".
									</li>
									<li>
										Curso de A.P.A-“Avatares de las
										psicoterapias y del terapeuta en el
										hospital de pediatría. Desafíos de la
										clínica actual".
									</li>
									<li>
										Concurrente “Clínica del niño y su
										familia”, Hospital Materno Infantil Dr.
										Carlos Gianantonio.
									</li>
									<li>
										Concurrente en “ 3er Jornada Científica
										del Hospital Materno Infantil de San
										isidro en la Semana del Prematuro”
									</li>
									<li>
										Concurrente Jornadas Hospitalarias de
										Psicología “Los Cuerpos…¿El cuerpo?”.
										Área de Psicología. Hospital Municipal
										Materno Infantil de San Isidro “Dr.
										Carlos Gianantonio
									</li>
									<li>
										Concurrente a las XIV Jornada: “Sitios
										de Subjetivación en Niñez y
										Adolescencia”. Secretaría de Extensión.
										Facultad de Psicología. U.B.A
									</li>
									<li>
										Concurrente “La práctica analítica en la
										clínica de la urgencia”. Hospital Zonal
										de Agudos Magdalena V. De Martínez.
									</li>
								</Ul>
							</div>
							<ImgWrapp>
								<img
									className="img"
									src={'psySil.png'}
									alt="psy silhouette"
								/>
							</ImgWrapp>
						</ContentWrapper>
					</Main>
				</PageContentWrap>
				<Footer />
			</PageContainer>
		</Container>
	)
}
