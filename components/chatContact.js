import { Image, Link } from '@chakra-ui/react'
//{['mobile', 'mobile', 'mobile', 'mobile', 'desktop']}

function ChatContact() {
	const whatsappUrl =
		'https://api.whatsapp.com/send?phone=541154144224&text=Hola,%20mi%20nombre%20es%20'

	return (
		<Link
			href={whatsappUrl}
			position="fixed"
			bottom="15vh"
			bottom="25%"
			right={['1%', '5%', '10%', '15%', '20%']}
			maxW="50px"
			maxH="50px"
			margin-right="50px"
		>
			<Image src={'./whatsapp-icon.png'} alt="whatsapp-logo" />
		</Link>
	)
}
export default ChatContact
