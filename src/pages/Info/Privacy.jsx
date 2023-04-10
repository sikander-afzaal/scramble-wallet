const Privacy = () => {
  return (
    <div className="contain flex-col justify-start mt-[80px] sm:mt-[100px] items-center ">
      <div className="flex justify-between lg:flex-row flex-col items-center gap-14 lg:gap-20 w-full">
        <img
          src="/privacy.svg"
          className="w-full max-w-[290px] sm:max-w-[383px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="title">
            How <span className="text-greenText">Tornado Cash</span> achieves
            privacy
          </h3>
          <p className="text-sm text-text">
            Tornado Cash improves transaction privacy by breaking the on-chain
            link between source and destination addresses. It uses a smart
            contract that accepts ETH deposits that can be withdrawn by a
            different address. To preserve privacy a relayer can be used to
            withdraw to an address with no ETH balance. Whenever ETH is
            withdrawn by the new address, there is no way to link the withdrawal
            to the deposit, ensuring complete privacy.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8 lg:flex-row flex-col lg:mt-16 items-center w-full gap-3">
        <StatBox val={0} title="Total ETH deposited" img="eth.svg" />
        <StatBox val={0} title="Unique users" img="user.svg" />
        <StatBox val={0} title="Total deposits" img="insert.svg" />
      </div>
    </div>
  );
};

export default Privacy;

const StatBox = ({ img, val, title }) => {
  return (
    <div className="border-greenText w-full lg:w-[252px] rounded-2xl border  p-5  flex justify-start items-start flex-col gap-2">
      <img
        src={img}
        className="w-[30px] h-[30px] object-contain self-end"
        alt=""
      />
      <h3 className="text-greenText text-2xl font-bold">{val}</h3>
      <p className="text-text text-sm">{title}</p>
    </div>
  );
};
