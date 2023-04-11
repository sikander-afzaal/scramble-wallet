import { useState } from "react";
import Tooltip from "../../components/Tooltip";

const WithrawTab = () => {
  const [showTooltipAmount, setShowTooltipAmount] = useState(false);
  const [formData, setFormData] = useState({
    note: "",
    address: "",
  });
  return (
    <div className="flex justify-start w-full items-start flex-col border-primary border-solid bg-dark px-[1.5rem] pt-[1.5rem] pb-[2rem] border gap-3">
      <div className="flex w-full justify-start items-start flex-col gap-2">
        <p className="text-text font-semibold text-base relative flex justify-start items-center gap-2">
          Note{" "}
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
            <Tooltip text="Please enter the note you recieved when you made the deposit" />
          )}
        </p>
        <input
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, note: e.target.value }))
          }
          value={formData.note}
          type="text"
          placeholder="Please enter your note"
          className="w-full bg-dark outline-none text-text h-[40px] pl-3 rounded-md focus:border-primary border border-solid border-white sm:text-base text-sm border-opacity-40 hover:border-opacity-100 focus:border-opacity-100 transition-all duration-300"
        />
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-2">
        <p className="text-text font-semibold text-base relative flex justify-between w-full items-center gap-2">
          Recipient Address
          <span className="text-xs text-primary border-b font-normal border-dashed border-primary">
            Donate
          </span>
        </p>
        <input
          type="text"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, address: e.target.value }))
          }
          value={formData.address}
          placeholder="Please paste your address here"
          className="w-full bg-dark sm:text-base text-sm outline-none text-text h-[40px] pl-3 rounded-md focus:border-primary border border-solid border-white border-opacity-40 hover:border-opacity-100 focus:border-opacity-100 transition-all duration-300"
        />
      </div>
      <button
        disabled={
          formData.note === "" && formData.address === "" ? true : false
        }
        className="bg-primary disabled:opacity-40 disabled:pointer-events-none w-full text-dark rounded-md h-[40px] text-base font-semibold mt-3"
      >
        Withraw
      </button>
    </div>
  );
};

export default WithrawTab;
