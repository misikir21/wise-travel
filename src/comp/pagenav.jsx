import {  NavLink} from "react-router-dom"
import Logo from "./Logo"
import styles from"./PageNav.module.css"
export default function Pagenav() {
  return (
    <nav className={styles.nav}>
   <Logo/>
    <ul>
    
    <li>
        <NavLink to="/Price">Pricing</NavLink>
        </li>
        <li>
        <NavLink to="/Product">Product</NavLink>
        </li>
       <li>
        <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
        </li>

      
    </ul>
    </nav>
  )
}
