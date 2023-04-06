import { Link } from 'react-router-dom'
import './navbar.css'

 function Navbar() {
  return (
    <div className='navContainer' >

      <div className='logoDiv'>
        <img src="./Beige Minimalist Modern Typography Logo" alt="" />
      </div>
      <h1>WELCOME ADMIN!</h1>
      <div className='linkDiv'>
        <Link to="/"><button className='navbutton'>Logout</button></Link>
        <a href="https://amazonagora.netlify.app/"><button className='navbutton'>Switch to Main Page</button> </a>
      </div>

    </div>
  )
}
export default Navbar