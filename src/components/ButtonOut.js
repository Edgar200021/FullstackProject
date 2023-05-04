import { Link } from 'react-router-dom'
import out from '../assets/icons/sidebar/logout.svg'

export default function ButtonOut() {
	
	return <Link to='/'>
			<img src={out} alt="Logout" className="btn__out-icon" />	
		</Link>	
}