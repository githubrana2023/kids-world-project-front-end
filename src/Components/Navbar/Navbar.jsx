import { useContext } from "react";
import NavbarLinks from "./NavbarLinks";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavbarLinks />
          </ul>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/world-globe-logo-with-people-community-family-teamwork-icon-world-peace-charity-care_8586-926.jpg?size=626&ext=jpg&ga=GA1.1.607451879.1674134985&semt=ais"
          className="w-28 md:inline-block hidden mix-blend-multiply"
        />
        <a className="btn btn-ghost normal-case text-xl">
          Kids Word
        </a>
      </div>
      <div className="navbar-center hidden lg:flex lg:ml-auto">
        <ul className="menu menu-horizontal px-1">
          <NavbarLinks />
        </ul>
      </div>

      {user && (
        <div className="dropdown dropdown-end navbar-end pr-8">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex ml-auto">
            <div className="rounded-full z-50 w-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={handleLogOut}>
            <a>Logout</a>
          </li>
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
