import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form  className="loginForm">
                <label >Email</label>
                <input type="email" className='loginInput' placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter your Password' />
                <button className="loginButtonOnly">Login</button>
            </form>
            <button className="registerButton">
                <Link to='/register' className='link'>Register</Link>
            </button>

        </div>
    )
}
