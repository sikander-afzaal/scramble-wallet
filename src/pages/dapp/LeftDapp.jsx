import { useState } from "react";
import DepositTab from "./DepositTab";
import WithrawTab from "./WithrawTab";

const LeftDapp = () => {
  const [tab, setTab] = useState("deposit");

  return (
    <div className="w-full flex  justify-start items-start flex-col">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => setTab("deposit")}
          className={` font-bold text-lg ${
            tab === "deposit"
              ? "bg-primary text-dark"
              : "bg-darkPrimary text-primary"
          } rounded-tl pl-[1.75rem]  border-primary border-t border-l border-solid  isolate py-[0.68rem] pr-[1.25rem] relative`}
        >
          Deposit
          {tab === "deposit" ? (
            <div className="-right-[1.5rem] skew-x-[20deg] rounded-tr absolute origin-bottom-left border-t border-solid border-primary w-[1.5rem] bg-primary -top-[1px] bottom-0 -z-10"></div>
          ) : (
            <div className="-right-[1.5rem] border-r skew-x-[20deg] rounded-tr  absolute origin-bottom-left border-t border-solid border-primary w-[1.5rem] bg-darkPrimary -top-[1px] bottom-0 -z-10"></div>
          )}
        </button>
        <button
          onClick={() => setTab("withraw")}
          className={`${
            tab === "withraw"
              ? "bg-primary text-dark"
              : "bg-darkPrimary text-primary"
          } font-bold text-lg b rounded-tr pr-[1.75rem] border-primary border-t border-r border-solid  isolate py-[0.68rem] pl-[1.25rem] relative`}
        >
          Withraw
          {tab === "withraw" ? (
            <div className="-left-[1.5rem] -skew-x-[20deg] rounded-tl absolute origin-bottom-left border-t border-solid border-primary w-[1.5rem] bg-primary -top-[1px] bottom-0 -z-10"></div>
          ) : (
            <div className="-left-[1.5rem] -skew-x-[20deg] rounded-tl border-l absolute origin-bottom-left border-t border-solid border-primary w-[1.5rem] bg-darkPrimary -top-[1px] bottom-0 -z-10"></div>
          )}
        </button>
      </div>
      {tab === "deposit" && <DepositTab />}
      {tab === "withraw" && <WithrawTab />}
      <div className="relative isolate text-primary text-[10px] border-primary border-solid border-l border-b pl-[1.75rem] mr-[1.75rem] rouned-bl bg-dark pr-[0.625rem] py-[0.68rem]">
        eth-01.scramble.wallet.eth
        <div className="absolute -z-10 border-primary -right-4 border-r border-b-[0.5px] border-solid bg-dark w-[2.5rem] -bottom-[1px] top-0 -skew-x-[20deg]"></div>
      </div>
    </div>
  );
};

export default LeftDapp;
