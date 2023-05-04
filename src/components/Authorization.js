import {useState} from 'react'
import { Link } from 'react-router-dom'


import logo from '../assets/icons/sidebar/logo.svg'
import facebook from '../assets/icons/authorization/facebook.svg'
import github from '../assets/icons/authorization/github.svg'
import google from '../assets/icons/authorization/google.svg'
import showpassword from '../assets/icons/authorization/show-password.svg'




export default function Authorization() {

	const [toggle, setToggle] = useState(false)
	const [transform, setTransform] = useState(false)
	const [target, setTarget] = useState()
	const [passwordShow, setPasswordShow] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [data, setData] = useState({})


	function toggleColor() {
		setToggle(toggle => !toggle)
	}

	function toggleLeft() {
		setTransform(true)
	}

	function toggleRight() {
		setTransform(false)
	}

	function targetItem(e) {
		setTarget(e.target)
		return target
	}

	function showPassword() {
		setPasswordShow(!passwordShow)
		if (target) {
			passwordShow ? target.type = 'text' : target.type = 'password'
		}
	}

	function setLoginValue(e) {
		setLogin(e.target.value)
	}

	function setPasswordValue(e) {
		setPassword(e.target.value)
	}


	const handleSignIn = () => {
		fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(
			{
				username: login,
				password: password 
			}
			)
		   })
		  .then(response => response.json())
		  .then(res => {
	
				setData(res)
		  })
		  .catch((error) => {
				console.log(error)
		  });
	}

	return <div className="wrapper">

				<div className="authorization">
					<div className="authorization__box">
						<form action="" className={!transform ? 'form' : 'form move-to-right'}>
							<div className="form__social">
								<img src={logo} alt="form__logo" className="form__logo" />
								<div className="form__social-box">
									<a href="">	<img src={facebook} alt="facebook"/></a>
									<a href="">	<img src={github} alt="github"/></a>
									<a href=""><img src={google} alt="google"/></a>
								</div>
							</div>

							<div className="form__content">
								<input className='form__input' onChange={setLoginValue} type="email" placeholder='Email' value={login} required/>
								<div style={{position: 'relative'}}>
									<img src={showpassword} className='show-password' alt="" onClick={showPassword} />
									<input  style={{width: '100%'}} value={password} onChange={setPasswordValue} className='form__input' type="password" onClick={targetItem} placeholder='Password' required/>	
								</div>
								<div className="form__toggle" onClick={toggleColor}>
									<p className={toggle ? 'form__toggle-box form__toggle-box--active' : 'form__toggle-box'}></p>
									<p className="form__toggle-text">Remember me</p>
								</div>
								<Link  className="form__button btn-signin" to=
										{data.status === 'Logged in' ? '/Home' : ''}
								  onClick ={handleSignIn}>
									Sign in
								</Link>

							</div>

							<div className="form__bottom">
								<p className="form__bottom-descr">Don't have an account?</p>
									<a href="#" className="form__bottom-link" onClick={toggleLeft}> Sign Up</a>
							</div>
						</form>

						<form action="" className={transform ? 'form move-to-left' : 'form'}>
							<div className="form__social">
								<img src={logo} alt="form__logo" className="form__logo" />
								<div className="form__social-box">
									<a href="">	<img src={facebook} alt="facebook"/></a>
									<a href="">	<img src={github} alt="github"/></a>
									<a href=""><img src={google} alt="google"/></a>
								</div>
							</div>

							<div className="form__content">
							<input className='form__input' type="text" placeholder='Username' required/>
								<input className='form__input' type="email" placeholder='Email' required/>
								<div style={{position: 'relative'}}>
									<img src={showpassword} className='show-password' alt="" onClick={showPassword} />
									<input  style={{width: '100%'}} className='form__input' type="password" onClick={targetItem} placeholder='Password' required/>	
								</div>
								<div className="form__toggle" onClick={toggleColor}>
									<input type="checkbox" style={{cursor: 'pointer',  accentColor: '#0C0B0B'}}/>
									<p className="form__toggle-text">I agree to the terms & conditions</p>
								</div>
								<Link  className="form__button btn-signin" >
									Register
								</Link>

							</div>

							<div className="form__bottom">
								<p className="form__bottom-descr">Already have an account?</p>
									<a href="#" className="form__bottom-link" onClick={toggleRight}> Sign In</a>
							</div>
						</form>
					</div>
				</div>
			</div>
}