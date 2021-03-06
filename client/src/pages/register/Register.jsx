import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form  className="registerForm">
            <label >Username</label>
                <input type="text" className='registerInput' placeholder='Enter your Username .. ' />

                <label >Email</label>
                <input type="email" className='registerInput' placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" className='registerInput' placeholder='Enter your Password' />
                <button className="registerLoginButton">Register</button>
            </form>
            <button className="loginButton">
            <Link to='/login' className='link'>Login</Link>
            </button>

        </div>
    )
}
