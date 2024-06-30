import React from "react";
import Package from '../../../package.json';

const Footer = () => {
    
    return(
        <footer id="footer" className="footer">
            <div className="container">
                <p className="text-muted">restful-booker-platform v{Package.version} Created by <a href="http://www.mwtestconsultancy.co.uk">Mark Winteringham</a> - &copy; 2019-24 <a href={'/#/cookie'}>Cookie-Policy</a> - <a href={'/#/privacy'}>Privacy-Policy</a> - <a href={'/#/admin'}>Admin panel</a> <span style={{float : "right"}}></span></p>
            </div>
        </footer>
    )
    
}

export default Footer;