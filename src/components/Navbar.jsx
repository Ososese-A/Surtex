import logo from "../assets/surtex_logo.svg";
import search from "../assets/search_icon.svg"
import cart from "../assets/cart_icon.svg"
const Navbar = () => {
    return ( 
        <>
        <div className="nav-con">
        <nav>
        <ul className="navul">
            <li className="navli"><a href="#home"><img src={logo} alt="Surtex Logo" /></a></li>
            <li className="navli"><a href="#home">Condoms</a></li>
            <li className="navli"><a href="#home">Lubricants</a></li>
            <li className="navli"><a href="#home">Massagers</a></li>
        </ul>
        <ul className="navul">
            <li className="navli"><a href="#home">About Us</a></li>
            <li className="navli"><a href="#home">Blog</a></li>
            <li className="navli"><a href="#home"><img src={cart} alt="cart logo" /></a></li>
            <li className="navli"><a href="#home"><img src={search} alt="search logo" /></a></li>
        </ul>
        </nav>
        </div>
        </>
     );
}
 
export default Navbar;