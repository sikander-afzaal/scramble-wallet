import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Tooltip from "../../components/Tooltip";

const DepositTab = () => {
  const dropRef = useRef();
  const [showTooltipAmount, setShowTooltipAmount] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0.1);
  const [tokenDrop, setTokenDrop] = useState({
    toggle: false,
    name: "ETH",
  });
  useOutsideClick(dropRef, () =>
    setTokenDrop((prev) => ({ ...prev, toggle: false }))
  );
  return (
    <div className="flex justify-start w-full items-start flex-col border-primary border-solid bg-dark px-[1.5rem] pt-[1.5rem] pb-[2rem] border gap-3">
      <p className="text-text text-base font-semibold">Token</p>
      <div ref={dropRef} className="relative w-full">
        <button
          onClick={() =>
            setTokenDrop((prev) => ({ ...prev, toggle: !prev.toggle }))
          }
          className="text-text rounded w-full border border-white hover:border-opacity-100 border-solid border-opacity-40 focus:border-opacity-100 focus:border-primary h-[40px] transition-all duration-300 px-3 text-base flex justify-between items-center "
        >
          {tokenDrop.name}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${
              tokenDrop.toggle ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {tokenDrop.toggle && (
          <div className="flex justify-start items-start flex-col rounded-lg bg-dark z-20 absolute top-[120%] left-0 w-full overflow-hidden border-solid border-primary border">
            <button
              onClick={() => setTokenDrop({ toggle: false, name: "ETH" })}
              className="w-full px-3 text-left py-2 bg-dark hover:bg-primary hover:text-dark text-text text-base"
            >
              ETH
            </button>
            <button
              onClick={() => setTokenDrop({ toggle: false, name: "DAI" })}
              className="w-full px-3 text-left py-2 bg-dark hover:bg-primary hover:text-dark text-text text-base"
            >
              DAI
            </button>
            <button
              onClick={() => setTokenDrop({ toggle: false, name: "cDAI" })}
              className="w-full px-3 text-left py-2 bg-dark hover:bg-primary hover:text-dark text-text text-base"
            >
              cDAI
            </button>
            <button
              onClick={() => setTokenDrop({ toggle: false, name: "USDC" })}
              className="w-full px-3 text-left py-2 bg-dark hover:bg-primary hover:text-dark text-text text-base"
            >
              USDC
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-start mt-2 items-start flex-col gap-1 w-full">
        <p className="text-text font-semibold text-base relative flex justify-start items-center gap-2">
          Amount{" "}
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
            <Tooltip text="Each amount is a standalone scramble.wallet instance with a separate anonymity set. Check the stats tab for more info." />
          )}
        </p>
        <div className="grid mt-2 grid-cols-4 relative place-items-center isolate min-w-full">
          <div className="absolute -z-10 bg-primary h-0.5 w-full top-[10px] left-0"></div>
          <div className="flex justify-center items-center w-full gap-2 flex-col">
            <button
              onClick={() => setSelectedAmount(0.1)}
              className="rounded-full flex justify-center items-center w-5 aspect-square border-2 border-solid border-primary bg-dark"
            >
              <div
                className={`w-3 aspect-square rounded-full bg-primary ${
                  selectedAmount === 0.1 ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              ></div>
            </button>
            <p
              className={`${
                selectedAmount === 0.1 ? "text-primary" : "text-text"
              } transition-all text-sm duration-300  `}
            >
              0.1 ETH
            </p>
          </div>
          <div className="flex justify-center items-center w-full gap-2 flex-col">
            <button
              onClick={() => setSelectedAmount(1)}
              className="rounded-full flex justify-center items-center w-5 aspect-square border-2 border-solid border-primary bg-dark"
            >
              <div
                className={`w-3 aspect-square rounded-full bg-primary ${
                  selectedAmount === 1 ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              ></div>
            </button>
            <p
              className={`${
                selectedAmount === 1 ? "text-primary" : "text-text"
              } transition-all text-sm duration-300  `}
            >
              1 ETH
            </p>
          </div>
          <div className="flex justify-center items-center w-full gap-2 flex-col">
            <button
              onClick={() => setSelectedAmount(10)}
              className="rounded-full flex justify-center items-center w-5 aspect-square border-2 border-solid border-primary bg-dark"
            >
              <div
                className={`w-3 aspect-square rounded-full bg-primary ${
                  selectedAmount === 10 ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              ></div>
            </button>
            <p
              className={`${
                selectedAmount === 10 ? "text-primary" : "text-text"
              } transition-all text-sm duration-300  `}
            >
              10 ETH
            </p>
          </div>
          <div className="flex justify-center items-center w-full gap-2 flex-col">
            <button
              onClick={() => setSelectedAmount(100)}
              className="rounded-full flex justify-center items-center w-5 aspect-square border-2 border-solid border-primary bg-dark"
            >
              <div
                className={`w-3 aspect-square rounded-full bg-primary ${
                  selectedAmount === 100 ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              ></div>
            </button>
            <p
              className={`${
                selectedAmount === 100 ? "text-primary" : "text-text"
              } transition-all text-sm duration-300  `}
            >
              100 ETH
            </p>
          </div>
        </div>
      </div>
      <button className="bg-primary w-full text-dark rounded-md h-[40px] text-base font-semibold mt-3">
        Deposit
      </button>
    </div>
  );
};

export default DepositTab;
