import  { SITE_LOGO } from "../utils/constants";

const HeaderComponent = () => {
    return (
      <div className="header">
         <div className="logo">
            <img src={SITE_LOGO} alt="log"></img>
         </div>
         <div className="navitem">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Services</li>
                <li>Top offers</li>
                <li>My card</li>
            </ul>
         </div>
      </div>
    )
}

export default HeaderComponent;