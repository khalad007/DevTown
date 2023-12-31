import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {

  const links = (
    <>
      <li
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="100"
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/availablePhone"}>Available Phone</NavLink>
      </li>
      
      
    </>
  );
  return (
    <div className="bg-gray60">
      <div className="container mx-auto">
        <div className="navbar bg-gray60">
          {/* logo navbar */}
          <div className="navbar-start">
            <a
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
              className="text-4xl font-bold"
            >
              m
              <span className="text-[#4F6F52]">Shop.</span>
            </a>
          </div>
          {/* navbar in larg device */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal justify-center items-center space-x-3 px-1">
              {links}
            </ul>
          </div>
          {/* navbar in small device */}
          <div className="navbar-end lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={1}
                className="menu space-y-3 menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-gray60 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
