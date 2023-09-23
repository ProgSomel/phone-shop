import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg h-[200px] md:h-12 mt-5  px-8">
      <nav className="md:flex justify-between items-center text-center">
        {/* logo  */}
        <div>
          <Logo></Logo>
        </div>
        <div>
          <div className=" flex justify-center my-3  md:hidden" onClick={() => setOpen(!open) }>
            {open === true ? (
              <AiOutlineClose></AiOutlineClose>
            ) : (
              <AiOutlineMenu></AiOutlineMenu>
            )}
          </div>
          <ul className={`md:flex  md:gap-8   absolute duration-1000 md:static ${open ? 'top-20 left-32  md:left-52 mt-10 ':'-top-60 left-32'}`}>
            <li className="">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 underline"
                    : ""
                }
              >
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 underline"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
