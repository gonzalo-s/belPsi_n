const desktopStartWidth = '996px'
const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

// paleta de colores usados:
//https://colors.muz.li/palette/5d4954/41333e/fff1fc/ffe4f9/ffffff
//special color for highlightedtext #3adbb9

console.log(mobile)
export const UiKitDefaults = {
	hover: {
		color: '#dedadc',
	},
	buttons: {
		backgroundColor: '#5d4954',
	},
	backgroundColor: '#41333e',
	mobile: mobile,
	desktop: desktop,
	textColor: '#5d4954',
	textColorLight: '#fff1fc',
	highLightedText: '#F842A3',
}
