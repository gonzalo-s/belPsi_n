import styles from '../styles/Home.module.css'

function ChatContact() {
	const whatsappUrl =
		'https://api.whatsapp.com/send?phone=541154144224&text=Hola,%20mi%20nombre%20es%20'

	return (
		<a className={styles.chatContact} href={whatsappUrl}>
			<img
				src={'./whatsapp-icon.png'}
				width={'50vw'}
				alt="whatsapp-logo"
			/>
		</a>
	)
}
export default ChatContact
