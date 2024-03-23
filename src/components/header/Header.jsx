import React from "react";
import "./header.css"
import image from "../../assets/images/image.png"
const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <h1>Save your data storage here.</h1>
                <p>Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.</p>
                <button type="button">Learn more</button>
            </div>
            <div className="header__img">
                <img src={image} alt="anh" />
            </div>
        </div>
    )
}
export default Header;