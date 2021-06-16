
import './topbar.css'
import { Link } from 'react-router-dom'
export default function TopBar() {
    const user = false
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to='/' className='link'>HOME</Link></li>
                    <li className="topListItem"><Link to='/about' className='link'>ABOUT</Link></li>
                    <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li>
                    <li className="topListItem"><Link to='/write' className='link'>WRITE</Link></li>
                    <li className="topListItem"><Link to='/logout' className='link'>
                        {user && "LOGOUT"}
                        </Link></li>
                   

                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

                        <img className='topImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWgYbs6SQrAEknTLAEbcoPaMAKNWu0NSt_nerHx-q3MTDqiZK&s" alt="profile" srcset="" />
                    ) :(
                        <ul className='topList'>
                            <li className="topListItem">
                            <Link className='link' to='/login' >LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className='link' to='/register' >REGISTER</Link>
                            </li>
                            
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
