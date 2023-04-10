import { useState } from "react";
import Tooltip from "../../components/Tooltip";

const Statistics = () => {
  const [showTooltipAmount, setShowTooltipAmount] = useState(false);
  return (
    <div className="flex justify-start items-start flex-col w-full">
      <div className="flex xl:border-b-0 border-b justify-start items-center gap-3 border-l border-t pl-7 rounded-tl border-lightGray py-[0.68rem] pr-[0.625rem] isolate bg-dark relative">
        <p className="text-white text-lg font-semibold">Statistics</p>
        <p className="border border-primary text-primary border-solid rounded text-[10px] font-semibold px-2 py-1">
          0.1 ETH
        </p>
        <div className="absolute -z-10 bg-dark -right-[1.8rem] skew-x-[20deg] rounded-tr border-r border-t -top-[1px] w-[2.5rem] bottom-0 border-solid border-lightGray origin-bottom-left"></div>
      </div>
      <div className="flex w-full justify-start items-start flex-col p-6 border-solid border-lightGray border">
        <p className="text-text font-semibold text-base relative flex justify-start items-center gap-2">
          Anonymity set{" "}
          <svg
            onMouseEnter={() => {
              if (window.innerWidth > 1024) {
                setShowTooltipAmount(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 1024) {
                setShowTooltipAmount(false);
              }
            }}
            onClick={() => setShowTooltipAmount((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#94febf"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          {showTooltipAmount && (
            <Tooltip text="Each amount is a standalone Tornado Cash instance with a separate anonymity set. Check the stats tab for more info." />
          )}
        </p>
        <p className="text-base text-text">27627 equal user deposits</p>
        <div className="flex mt-6 justify-start items-start flex-col gap-2 w-full">
          <p className="text-base text-text font-semibold">Latest Deposits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-5 ">
            <DepositBox />
            <DepositBox />
            <DepositBox tranparent />
            <DepositBox tranparent />
            <DepositBox />
            <DepositBox />
            <DepositBox tranparent />
            <DepositBox tranparent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

const DepositBox = ({ tranparent }) => {
  return (
    <div
      className={`px-2 py-4 sm:p-2 w-full ${
        !tranparent ? "bg-lightGray" : "bg-transparent"
      } text-text text-sm font-semibold`}
    >
      27627.2 <span className="text-primary">.2 hours ago</span>
    </div>
  );
};
