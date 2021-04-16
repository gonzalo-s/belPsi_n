import { Whastapp } from '../components/ui/uiFooter'

function ChatContact() {
	const whatsappUrl =
		'https://api.whatsapp.com/send?phone=541154144224&text=Hola,%20mi%20nombre%20es%20'

	return (
		<Whastapp href={whatsappUrl}>
			<img
				src={'./whatsapp-icon.png'}
				width={'50vw'}
				alt="whatsapp-logo"
			/>
		</Whastapp>
	)
}
export default ChatContact
