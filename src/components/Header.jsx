import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/W.png";
import { Link } from "react-router-dom";

function NavList() {
  const pageList = [
    {
      id: 1,
      label: "Home",
      pathName: "/",
    },
    {
      id: 2,
      label: "About us",
      pathName: "/about",
    },
    {
      id: 3,
      label: "Contact us",
      pathName: "/contact-us",
    },
    {
      id: 4,
      label: "Login",
      pathName: "/",
    },
  ];

  return (
    <ul className="my-2 p-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pageList.map((data) => (
        <>
          <Typography
            key={data.id}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to={data.pathName}
              className="flex items-center justify-end text-white transition-colors"
            >
              {data.label}
            </Link>
          </Typography>
        </>
      ))}
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-5 sticky top-3 z-50 bg-transparent text-white">
      <div className="flex items-center justify-between ">
        <div className=" flex justify-between items-center">
          <div className=" px-1">
            <Link>
              <Avatar src={logo} alt="" />
            </Link>
          </div>
          <div>
            <p>Kiranravi Dev</p>
          </div>{" "}
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
