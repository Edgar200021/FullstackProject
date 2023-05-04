
import logo from '../assets/icons/sidebar/logo.svg'


export default function Logo() {
	return <div className='logo'>
				<a href="#" className="logo__link">
					<img src={logo} alt="Logo" className="logo__img" />
				</a>
		   </div>
}