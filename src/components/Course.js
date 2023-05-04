import ButtonContinue from './ButtonContinue'



export default function Course({img, title, author, hour, minute,rating}) {
	return <div className="course actions__course">
				<div className="course__img-box">
					<img src={img} alt="" className="course__img" />
				</div>
				<div className="course__info">
					<div className="course__info-left">
						<h3 className="course__title third-title">{title}</h3>
						<p className="course__author">{author}</p>
					</div>
					<div className="course__info-right">
						<p className="course__time">
							<span className='course__time-hour'>{hour}</span>
							<span>h</span>
							<span className='course__time-minute'>{minute}</span>min
						</p>
						<p className="course__rating">
							{rating}
						</p>
					</div>
				</div>
				<ButtonContinue descr='View course'/>
		   </div>

}