import { Link } from 'react-router-dom'

import home from '../assets/icons/sidebar/home.svg'
import hat from '../assets/icons/sidebar/hat.svg'
import user from '../assets/icons/sidebar/user.svg'
import message from '../assets/icons/sidebar/message.svg'
import settings from '../assets/icons/sidebar/settings.svg'


export default function Nav() {
	return <nav className="menu">
				<ul className="menu__list">
					<li className="menu__item">|
						<Link to='/Home' href="#" className="menu__link"><img src={home} alt="Home-icon" className="menu__icon" /></Link>
					</li>
					<li className="menu__item">
						<a href="#" className="menu__link"><img src={hat} alt="Hat-icon" className="menu__icon" /></a>
					</li>
					<li className="menu__item">
						<Link to='/Actions' className="menu__link"><img src={user} alt="User-icon" className="menu__icon" />
						</Link>
					</li>
					<li className="menu__item">
						<a href="#" className="menu__link"><img src={message} alt="Message-icon" className="menu__icon" /></a>
					</li>
					<li className="menu__item">
						<a href="#" className="menu__link"><img src={settings} alt="Settings-icon" className="menu__icon" /></a>
					</li>
				</ul>
	       </nav>
}