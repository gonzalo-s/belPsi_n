const desktopStartWidth = '996px'
const desktop = `@media (min-width: ${desktopStartWidth})`
const mobile = `@media (max-width: ${desktopStartWidth})`

// Color palette 1

// const color1 = '#41333e' // Background
// const color2 = '#5d4954' // Dark Text && Btn Background
// const color3 = '#fff1fc' // Light Text
// const color4 = '#F842A3' // Highlighted Text
// const color5 = '#dedadc' // Hover

// Color palette 2

// const color1 = '#202020' // Blackish  | Background
// const color2 = '#3f3f3f' // Dark Grey | Dark Text && Btn Background
// const color3 = '#ffffff' // White     | Light Text
// const color4 = '#ffdf6c' // Egg Yell  | Highlighted Text && Hover
// const color5 = '#707070' // Med Grey  |

// Color palette 3

const color1 = '#DADED44d' // Tanly     | Background
const color2 = '#3C403D' // Brown Grey| Dark Text && Btn Background
const color3 = '#ffffff' // White     | Light Text
const color4 = '#39603D' // Green Leaf| Highlighted Text && Hover
const color5 = '#A3BCB64d' // Olive     |
//Olive: #A3BCB6

//Green Leaf: #39603D

//Brown Grey: #3C403D

//Tanly: #DADED4

//White: #FFFFFF

console.log(mobile)
export const UiKitDefaults = {
	mobile: mobile,
	desktop: desktop,
	backgroundColor: color1,
	textColor: color2,
	textColorLight: color2,
	highLightedText: color4,
	dropCaps: color4,
	body: {
		backgroundColor: color1,
		backgroundImage: 'fabrik-bk4.png',
	},
	hover: {
		//color: color5, //Color palette 1
		color: color4,
	},
	buttons: {
		backgroundColor: color2,
		hover: color5,
	},
	form: {
		backgroundColor: color5,
		buttonBackgroundColor: color3,
	},
}
