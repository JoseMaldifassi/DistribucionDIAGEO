import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sections, setSection] = useState("");

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  const links = [
    {
      path: "/",
      name: "HOME",
      more: [
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
      ],
    },
    {
      path: "/business",
      name: "OUR BUSINESS",
      more: [
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
      ],
    },
    {
      path: "/brands",
      name: "OUR BRANDS",
      more: [
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
        {
          path: "/about",
          name: "ABOUT",
        },
      ],
    },
  ];

  const content = (link) => [];

  return (
    <header
      className="flex flex-row justify-between items-center px-4
      border-b-2 min-h-[62px]"
    >
      <button
        className="block sm:hidden"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <IconMenu2 stroke={2} />
      </button>
      <h4>DIAGEO</h4>

      <nav className="hidden sm:flex flex-row ">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 p-5 text-sm hover:text-gray-300"
                : "p-5 text-sm hover:text-gray-300 transition border b-2 border-white hover:border-gray-300 cursor-pointer"
            }
          >
            <Link to={link.path}>
              <div className="group">
                <button>{link.name}</button>
                <div className="hidden group-hover:flex flex-col absolute left-0 top-[62px] p-10 w-full bg-white border-2 text-black duration-300">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                      {link.more.map((subLink) => (
                        <Link
                          to={`${link.path}/${subLink.path}`}
                          className="hover:underline hover:text-gray-300"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </NavLink>
        ))}

        <NavLink
          to={"login"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-400 p-5 text-sm"
              : "p-5 text-sm hover:text-gray-300 transition border b-2 border-white hover:border-gray-300 cursor-pointer"
          }
        >
          LOGIN
        </NavLink>
      </nav>
    </header>
  );
}
