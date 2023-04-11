import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper pt-5">
      <div className="contain justify-between items-center gap-4">
        <Link to={"/"}>
          <h3 className="text-greenText uppercase font-bold text-3xl">
            Scrambled
          </h3>
        </Link>
        <nav
          className={`sm:static fixed w-full sm:w-auto h-full sm:h-auto top-0 z-[80] flex-col sm:flex-row ${
            headerToggle ? "right-0" : "-right-full"
          } transition-all duration-500 flex justify-start items-center  pt-[6rem] pb-[3rem] px-[3rem] sm:p-0 overflow-y-auto sm:overflow-visible bg-black sm:bg-transparent gap-5`}
        >
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 absolute top-4 right-4 cursor-pointer sm:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <Link
            onClick={() => setHeaderToggle(false)}
            to="/info"
            className="text-text text-lg sm:text-sm hover:text-primary"
          >
            Info
          </Link>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-text text-lg sm:text-sm hover:text-primary"
          >
            About
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-text text-lg sm:text-sm hover:text-primary"
          >
            Privacy tips
          </a>
          <button className="w-[120px] sm:w-[81px] text-lg sm:text-sm h-[45px] sm:h-[40px] text-primary border border-primary border-solid bg-darkPrimary hover:bg-primary hover:text-text transition-all duration-300">
            Connect
          </button>
        </nav>

        <svg
          onClick={() => setHeaderToggle(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6  cursor-pointer sm:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
