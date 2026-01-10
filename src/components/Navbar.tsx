import logo from "../assets/raviKumarLogo.webp"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className = "flex flex-shrink-0 items-center">
            <a href="/" aria-label= "Home">
            <img src = {logo} className= "mx-2" width = {50} height= {33}
            alt= "Logo" />
            </a>
        </div>
        <div className= "m-8 flex items-center justify-center gap-4 text-2xl text-stone-900">
            <a href="https://www.linkedin.com/in/alexandramallqui/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile">
                <FaLinkedin/>
            </a>

             <a href="https://github.com/alexandramallqui-blip" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub/>
            </a>

             <a href="https://www.instagram.com/a1ex238/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram/>
            </a>
        </div>

    </nav>)
}
export default Navbar
