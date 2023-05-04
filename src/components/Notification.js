import { Fragment,useState } from 'react'

import NotificationBoxItem from './NotificationBox'

import notification from '../assets/icons/notification.svg'

import user1 from '../assets/img/notification/user-1.png'
import user2 from '../assets/img/notification/user-2.png'
import user3 from '../assets/img/notification/user-3.png'
import user4 from '../assets/img/notification/user-4.png'

export default function Notification() {
	const [visible, setVisible] = useState(false)
	const [count, setCount] = useState(7)

	function toggleVisible() {
		setVisible(visibile => !visible)
	}



	return <Fragment>
				<button className="user-interface__notification notification" onClick={toggleVisible}>
					<img src={notification} alt="notification icon" />
					<span className="notification__count">{count}</span>
			    </button>
				<div className={visible ? 'notification__box-active notification__box' :'notification__box'}>
					<NotificationBoxItem userImg={user1} name='Harry Joe' message = 'Hi! I need more information..'/>
					<NotificationBoxItem userImg={user2} name='Anne Marie' message = 'Awesome work, can you..'/>
					<NotificationBoxItem userImg={user3} name='Ivanna' message = 'About files I can..'/>
					<NotificationBoxItem userImg={user4} name='Peterson' message = 'Have a great afternoon..'/>
					<NotificationBoxItem userImg={user2} name='Anne Marie' message = 'Awesome work, can you..'/>
					<NotificationBoxItem userImg={user3} name='Ivanna' message = 'About files I can..'/>
					<NotificationBoxItem userImg={user1} name='Harry Joe' message = 'Hi! I need more information..'/>
				</div>
				
		  </Fragment>
}