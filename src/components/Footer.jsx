import logo from "../assets/surtex_logo.svg";

const Footer = () => {
    return ( 
        <>
        <div className="foot">
            <img className="foot-logo" src={logo} alt="logo" />

            <div className="foot-txt">
            <div className="foot-txt-one">
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <p>|</p>
            <div className="foot-txt-two">
                <p>Cookie Policy</p>
                <p>Terms of Use</p>
            </div>
            </div>
            <div className="foot-copy">
                <p>copyright 2021 SURTEX. All Rights Reserved ©</p>
            </div>
        </div>
        </>
     );
}
 
export default Footer;