import {  NavLink} from "react-router-dom"
export default function Pagenav() {
  return (
    <nav>

    <ul>
        <li>
        <NavLink to="/Price">Price</NavLink>
        </li>

        <li>
        <NavLink to="/Product">Product</NavLink>
        </li>

        <li>
        <NavLink to="/Homepage">Home</NavLink>
        </li>
    </ul>
    </nav>
  )
}
