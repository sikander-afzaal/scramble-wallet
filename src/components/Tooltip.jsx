const Tooltip = ({ text }) => {
  return (
    <div className="absolute rounded-lg -right-2 sm:-right-4 translate-x-full  bg-primary text-center z-10  top-1/2 -translate-y-1/2 w-[150px] p-2">
      <div class="w-0 h-0 absolute top-1/2 -translate-y-1/2 right-full border-t-[5px] border-t-transparent border-r-[8px] border-r-primary border-b-[5px] border-b-transparent"></div>
      <p className="text-dark text-[10px] leading-[1.5]">{text}</p>
    </div>
  );
};

export default Tooltip;
