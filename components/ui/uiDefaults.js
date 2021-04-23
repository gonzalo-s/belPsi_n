const desktopStartWidth = '996px'
const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

export const UiKitDefaults = {
	hover: {
		color: '#dedadc',
	},
	buttons: {
		backgroundColor: '#846877',
	},
	backgroundColor: '#5d4954',
	mobile: mobile,
	desktop: desktop,
}
