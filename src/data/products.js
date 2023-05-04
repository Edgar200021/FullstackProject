import spanish from '../assets/icons/courses/spanish.svg'
import figma from '../assets/icons/courses/figma.svg'
import photography from '../assets/icons/courses/photography.svg'
import instagram from '../assets/icons/courses/instagram.svg'
import drawing from '../assets/icons/courses/drawing.svg'
import photoshop from '../assets/icons/courses/photoshop.svg'


const products = [
	{
		id: 1,
		img: spanish,
		title: 'Spanish B2',
		author: 'by Alejandro Velazquez',
		progressInfo: 83,
		timeForLearning: {
			hour: 6,
			minute: 30
		},
		rating: 4.6
	},
	{
		id: 2,
		img: figma,
		title: 'Learn Figma',
		author: 'by Christopher Morgan',
		progressInfo: 75,
		timeForLearning: {
			hour: 6,
			minute: 30
		},
		rating: 4.9
	},
	{
		id: 3,
		img: photography,
		title: 'Analog photography',
		author: 'by Gordon Norman',
		progressInfo: 87,
		timeForLearning: {
			hour: 3,
			minute: 15
		},
		rating: 4.7
	},
	{
		id: 4,
		img: instagram,
		title: 'Master Instagram',
		author: 'by Sophie Gill',
		progressInfo: 65,
		timeForLearning: {
			hour: 7,
			minute: 40
		},
		rating: 4.6
	},
	{
		id: 5,
		img: drawing,
		title: 'Basics of drawing',
		author: 'by Jean Tate',
		progressInfo: 39,
		timeForLearning: {
			hour: 11,
			minute: 30
		},
		rating: 4.8
	},
	{
		id: 6,
		img: photoshop,
		title: 'Photoshop - Essence',
		author: 'by David Green',
		progressInfo: 83,
		timeForLearning: {
			hour: 5,
			minute: 35
		},
		rating: 4.7
	}
]


export default products