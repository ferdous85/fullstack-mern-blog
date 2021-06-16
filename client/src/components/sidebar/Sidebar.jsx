import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="https://www.tecnomint.com/images/brand/1.jpg" alt="" srcset="" width='300px' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quis voluptas ullam veritatis rem similique commodi, </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    Categories
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
