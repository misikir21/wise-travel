import {  NavLink} from "react-router-dom"
import Logo from "../../starter/components/Logo"
import styles from"./PageNav.module.css"
export default function Pagenav() {
  return (
    <nav className={styles.nav}>
   <Logo/>
    <ul>
    
    <li>
        <NavLink to="/Price">Price</NavLink>
        </li>
        <li>
        <NavLink to="/Homepage">Home</NavLink>
        </li>
       <li>
        <NavLink to="/login">Login</NavLink>
        </li>

      
    </ul>
    </nav>
  )
}
