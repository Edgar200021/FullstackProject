
import { Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home'
import Login from './pages/Login'
import Actions from './pages/Actions'

function App() {
  return (	<Fragment>
				<Router>
					<Routes>
						<Route path='/Home' element={<Home/>} />
						<Route path='' element={<Login/>} />
						<Route path='/Actions' element={<Actions/>} />
					</Routes>
				</Router>
			</Fragment>
  )
}

export default App
