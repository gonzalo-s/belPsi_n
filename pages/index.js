import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ChatContact from '../components/chatContact'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
	let isDesktop = useMediaQuery({
		query: '(min-width: 920px)',
	})

	return (
		<div className={styles.container}>
			<Head>
				<title>Lic M.B.S</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<div className={styles.pageContainer}>
				<div className={styles.pageContentWrap}>
					<Navbar />
					<main className={styles.main}>
						<div className={styles.homeContainer}>
							<div className={styles.homeContainerBlock}>
								{isDesktop ? (
									<img
										className={styles.homeImg}
										src={'./calm-1919x1390.jpg'}
										alt="Calma"
									/>
								) : (
									<img
										className={styles.mobileHomeImg}
										src={'./calm-1919x1390.jpg'}
										alt="Calma"
									/>
								)}

								<p>
									“Todo puede serle arrebatado a un hombre,
									menos la última de las libertades humanas:
									el elegir su actitud en una serie de
									circunstancias" Viktor Frankl
								</p>
							</div>
						</div>
					</main>
					<ChatContact />
				</div>
				<Footer />
			</div>
		</div>
	)
}
