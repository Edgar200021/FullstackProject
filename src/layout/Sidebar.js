import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ButtonOut from '../components/ButtonOut'

export default function Sidebar() {
	return <div className="sidebar">
				<Logo/>
				<Nav/>
				<ButtonOut/>
		   </div>
}