import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavbarLinks = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-toys">All Toys</NavLink>
      </li>
      <li>
        <NavLink to="/my-toys">My Toys</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>

      {!user ? (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/add-toy">Add A Toy</NavLink>
        </li>
      )}
    </>
  );
};

export default NavbarLinks;
