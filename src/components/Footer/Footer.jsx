import React from "react";
import "./footer.css"
import logo from "../../assets/images/logo.png"
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__content-company footer__item">

                        <div className="footer__content-company__title">
                            <img src={logo} alt="" />
                            <h3>DataWarehouse</h3>
                        </div>
                        <ul>
                            <li><p>Warehouse Society, 234
                                <br />Bahagia Ave Street
                                PRBW 29281
                            </p></li>
                            <li> <p>
                                info@warehouse.project

                            </p></li>
                            <li>1-232-3434 (Main)</li>
                        </ul>


                    </div>
                    <div className="footer__content-about footer__item">
                        <h3>About</h3>
                        <ul>
                            <li>
                                Profile
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                DW News
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content-help footer__item">
                        <h3>Help</h3>
                        <ul>
                            <li>
                                Support
                            </li>
                            <li>
                                Sign up
                            </li>
                            <li>
                                Guide
                            </li>
                            <li>
                                Reports
                            </li>
                            <li>
                                Q&A
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content-media footer__item">
                        <h3>Social Media</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>
                        © Datawarehouse™, 2020. All rights reserved.<br/>
                        Company Registration Number: 21479524.
                    </p>
                    <div className="footer__copyright-message"></div>
                </div>
            </div>
        </div>
    )
}
export default Footer;