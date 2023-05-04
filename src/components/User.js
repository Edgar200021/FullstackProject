import user from '../assets/img/user-photo.jpg'

export default function User() {
	return <div className="user-interface__user user">
				<img src={user} alt="" className="user__img" />
				<button className='user__btn'>
				</button>
		   </div>
}