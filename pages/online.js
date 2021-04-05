import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ChatContact from '../components/chatContact'

export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lic M.B.S</title>
				<link rel="icon" href="/32px-Psi2.svg.png" />
			</Head>
			<div className={styles.pageContainer}>
				<div className={styles.pageContentWrap}>
					<Navbar />
					<main className={styles.main}></main>
					<ChatContact />
				</div>
				<Footer />
			</div>
		</div>
	)
}
