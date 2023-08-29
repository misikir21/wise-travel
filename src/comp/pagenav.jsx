import { Link } from "react-router-dom"
export default function Pagenav() {
  return (
    <nav>

    <ul>
        <li>
        <Link to="/Price">Price</Link>
        </li>

        <li>
        <Link to="/Product">Product</Link>
        </li>

        <li>
        <Link to="/Homepage">Home</Link>
        </li>
    </ul>
    </nav>
  )
}
