
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/mycart">My Cart</Link>
      <Link to="/myorder">My Order</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  )
}

export default Navbar
