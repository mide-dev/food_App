import { Link, NavLink } from "react-router-dom";

import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";

function Header() {
  return (
    <header className="my-8 md:my-6 flex flex-col items-center md:flex-row md:justify-between gap-x-8 ">
      <Link to="/">
        <Logo className="w-[6.5rem] fill-custom_accent mb-6 md:mb-0" />
      </Link>
      <Search className="w-full lg:max-w-[50%]" />
      <div className="flex items-center justify-between gap-x-8">
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-x-8 font-poppins text-sm font-medium text-custom_primary_200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "is-active nav-hover" : "nav-hover"
              }
            >
              Restaurants
            </NavLink>
            <NavLink
              to="top-picks"
              className={({ isActive }) =>
                isActive
                  ? "hidden lg:inline-block nav-hover is-active nav-hover"
                  : "hidden lg:inline-block nav-hover nav-hover"
              }
            >
              Top Picks
            </NavLink>
            <NavLink
              to="why-us"
              className={({ isActive }) =>
                isActive ? "is-active nav-hover" : "nav-hover"
              }
            >
              Why us
            </NavLink>
          </ul>
        </nav>
        <Account />
      </div>
    </header>
  );
}

export default Header;
