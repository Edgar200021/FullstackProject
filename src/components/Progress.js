import {useState, useEffect} from 'react'
import ButtonContinue from './ButtonContinue'
import ButtonSlider from './ButtonSlider'





export default function ProgressSlider() {
	const [slideIndex, setSlideIndex] = useState(0)
	const [data, setData] = useState()
	
	const nextSlide = () => {
		setSlideIndex(slideIndex === data.length - 1 ? 0 : slideIndex + 1 )
	}

	const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? data.length - 1 : slideIndex - 1 )
	}

	useEffect(() => {
		fetch('http://localhost:3001/courses')
			.then(res => res.json())
			.then(res => {
				 setData(res)
			})
		}
		)
	
	return <section className="progress">
				<div className="progress__inner">
				{data?.map((item, index) => {
					return ( 
							<div className="progress__inner-slide" key={item.id} style ={{transform: `translateX(-${slideIndex * 100}%)`}}>
								<div className="progress__img-box">
									<img src={item.img} alt="" className="progress__img" />
								</div>
								<div className="progress__info">
									<div className="progress__info-left">
										<h3 className="progress__title third-title">{item.title}</h3>
										<div className="progress__descr">{item.author}</div>
									</div>
									<div className="progress__info-right">
										<p className="progress__info-right--text">
											<span>{item.progressInfo}</span>
											<span>%</span>
										</p>
									</div>
								</div>
								
								<ButtonContinue title='continue' descr='Continue'/>
								</div>
					)
				})}
				</div>
				<div className="progress__action slider__btn">
					<ButtonSlider moveSlide = {prevSlide} direction = 'prev'/>
					<ButtonSlider moveSlide = {nextSlide} direction = 'next'/>
				</div>
				
		   </section>
}