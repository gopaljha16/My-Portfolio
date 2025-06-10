
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../slice/setTheme";

const Navbar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <div className="w-full fixed top-0 z-50 shadow-md ">
      <nav>
        <header className="flex items-center justify-center gap-10 text-xl py-4">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
          <button onClick={() => dispatch(changeTheme())}>
            {isDark ? <Sun /> : <Moon />}
          </button>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;