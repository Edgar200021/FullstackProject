
import message from '../assets/icons/message.svg'

export default function NotificationBoxItem({userImg, name, message}) {
	return 	<div className="notification__box-inner">
				<div className="notification__img-box">
					<img src={userImg} alt="user-1" />
				</div>
				<div className="notification__info">
					<h3 className="notification__title third-title">{name}</h3>
					<p className="notification__message">{message}</p>
				</div>
				<button className="notification__btn">
				</button>
			</div>

}