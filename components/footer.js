import Link from 'next/link'
import LinksDb from './LinksDb'
import {
	UlMenu,
	UlExtra,
	Li,
	A,
	FooterWrapper,
	FooterTop,
	FooterBottom,
} from '../components/ui/uiFooter'
import ChatContact from '../components/chatContact'

function Footer() {
	return (
		<FooterWrapper>
			<ChatContact />
			<FooterTop className="top">
				<UlMenu>
					{LinksDb.menu.map((item, i) => {
						return (
							<Li key={i}>
								<Link href={item.link}>
									<A>{item.text}</A>
								</Link>
							</Li>
						)
					})}
				</UlMenu>
				<UlExtra>
					{LinksDb.footerExtra.map((item, i) => {
						return (
							<Li key={i}>
								<Link href={item.link}>
									<A>{item.text}</A>
								</Link>
							</Li>
						)
					})}
				</UlExtra>
			</FooterTop>
			<FooterBottom className="bottom">Copyright</FooterBottom>
		</FooterWrapper>
	)
}
export default Footer
