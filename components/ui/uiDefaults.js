const desktopStartWidth = '996px'
const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

// paleta de colores usados:
//https://colors.muz.li/palette/5d4954/41333e/fff1fc/ffe4f9/ffffff
//special color for highlightedtext #3adbb9

// Color palette 1

// const color1 = '#41333e' // Background
// const color2 = '#5d4954' // Dark Text && Btn Background
// const color3 = '#fff1fc' // Light Text
// const color4 = '#F842A3' // Highlighted Text
// const color5 = '#dedadc' // Hover

// Color palette 2

const color1 = '#202020' // Background
const color2 = '#3f3f3f' // Dark Text && Btn Background
const color3 = '#ffffff' // Light Text
const color4 = '#ffdf6c' // Highlighted Text
const color5 = '#707070' // Hover

console.log(mobile)
export const UiKitDefaults = {
	hover: {
		color: color5,
	},
	buttons: {
		backgroundColor: color2,
	},
	backgroundColor: color1,
	mobile: mobile,
	desktop: desktop,
	textColor: color2,
	textColorLight: color3,
	highLightedText: color4,
}
