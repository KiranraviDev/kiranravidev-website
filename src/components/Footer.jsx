import { Typography } from "@material-tailwind/react";
import logo from "../assets/W.png"
export function Footer() {
  return (
    <footer className="w-full bg-transparent p-8 text-white">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
        <img
          src={logo}
          alt={"logo"}
          className="w-10 rounded-full"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center text-white font-normal">
        &copy; {new Date().getFullYear()} copyrights claimed
      </Typography>
    </footer>
  );
}
