import { useEffect, useRef, useState } from "react";

const FaqTab = ({ question, answer, list }) => {
  const answerRef = useRef();
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("");
  useEffect(() => {
    setHeight(answerRef.current.getBoundingClientRect().height + 24);
  }, [window.innerWidth]);
  return (
    <div className="flex  justify-start overflow-hidden  items-start border-b border-solid border-lightGray flex-col w-full">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex text-left text-greenText gap-4 justify-between py-6 items-center  w-full"
      >
        <h4 className="text-sm sm:text-base md:text-xl text-greenText font-semibold">
          {question}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`min-w-[24px] sm:min-w-[32px] w-6 sm:w-8 h-6 sm:h-8 object-contain transition-all duration-300 ${
            active ? "rotate-45" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <div
        style={{ height: active ? `${height}px` : "0px" }}
        className={`flex justify-start overflow items-start transition-all  flex-col duration-500 `}
      >
        <div ref={answerRef} className="w-full">
          <p className="text-sm text-text">{answer}</p>
          <ul className="list-disc flex justify-start list-inside items-start flex-col gap-2 mt-2">
            {list?.map((elem) => {
              return (
                <li key={elem} className="text-sm text-text">
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqTab;
