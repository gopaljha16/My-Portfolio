import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../slice/setTheme";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className="container-px mt-5">
        <header
          className={`glass rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/10 transition-shadow ${
            elevated ? "shadow-xl shadow-black/20" : "shadow-md shadow-black/10"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a
              href="#home"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
              <span className="hidden sm:block">Portfolio</span>
            </a>

            {/* Center menu (desktop) */}
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative opacity-80 hover:opacity-100 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                className="btn btn-ghost ring-glow rounded-xl hidden md:inline-flex"
                onClick={() => dispatch(changeTheme())}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                className="md:hidden btn btn-ghost"
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 glass rounded-2xl p-4 border border-white/10"
          >
            <ul className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block opacity-80 hover:opacity-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="btn btn-ghost w-full"
                  onClick={() => {
                    dispatch(changeTheme());
                    setIsOpen(false);
                  }}
                >
                  <span className="mr-2">Theme</span>
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
