import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';

function Navbar() {

  const auth = useAuth();

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "white" : "gray",
    }
  }

  return (
    <nav>
      <NavLink style={navLinkStyles} to={"/"}>Home</NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>About</NavLink>
      <NavLink style={navLinkStyles} to={"/products"}>Products</NavLink>
      <NavLink style={navLinkStyles} to={"/users"}>Users</NavLink>
      <NavLink style={navLinkStyles} to={"/profile"}>Profile</NavLink>
      {
        !auth.user && <NavLink style={navLinkStyles} to={"/login"}>Login</NavLink>
      }
    </nav>
  )
}

export default Navbar