import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img
            width={300}
          src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/goldenapron/633cca727175d"
          alt=""
        />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto sequi nulla voluptate ea harum aut? Sapiente, voluptate numquam provident cumque at ipsa ab, sint reprehenderit nam, asperiores molestias ipsum.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORY</span>
            <ul className="sidebarList">
                <li className="sidebarListItem"> Life</li>
                <li className="sidebarListItem"> Music</li>
                <li className="sidebarListItem"> Style</li>
                <li className="sidebarListItem"> Sport</li>
                <li className="sidebarListItem"> Tech</li>
                <li className="sidebarListItem"> Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>


  )
}
