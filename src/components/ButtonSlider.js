import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'

export default function ButtonSlider({direction, moveSlide}) {
	return (
			<button className= {direction === 'prev' ? 'slider__btn-prev' : 'slider__btn-next'} onClick={moveSlide}>
			  <img src = {direction === 'prev' ? arrowLeft : arrowRight}/>
			</button>
	
	)
}