import { useState } from "react";
import LeftDapp from "./LeftDapp";
import Statistics from "./Statistics";

const Dapp = () => {
  const [noteToggle, setNoteToggle] = useState(true);
  return (
    <div className="wrapper mt-10 mb-10">
      <div className="contain justify-start items-center flex-col gap-7">
        {noteToggle && (
          <div className="flex rounded-lg gap-4 overflow-hidden border border-solid bg-dark border-lightGray  justify-between items-stretch w-full">
            <div className="flex   isolate relative justify-center items-center text-text min-w-[42px]  aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div className="absolute skew-x-[20deg] -z-10 bg-[#1d1d1d] border-r border-solid border-lightGray -top-[1px] -bottom-[1px] rounded-tr-[2px] -left-1/2 -right-[0.2rem]"></div>
            </div>
            <p className="text-sm text-text pl-3 py-[14px] text-center">
              Tornado.cash was audited. However, it is still an experimental
              software. Please use at your own risk.
            </p>
            <button
              onClick={() => setNoteToggle(false)}
              className="text-lightGray pr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-5 w-full gap-10 xl:gap-20">
          <LeftDapp />
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Dapp;
