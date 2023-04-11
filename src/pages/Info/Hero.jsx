const Hero = () => {
  return (
    <div className="contain flex-col justify-start items-center  sm:items-start gap-16">
      <h2 className="text-xl sm:text-3xl text-text font-bold">
        How <span className="text-greenText">Scramble.Wallet</span> Works
      </h2>
      <img
        src="/info-hero.svg"
        className="max-w-full w-full object-contain"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-16 mt-3">
        <div className="flex justify-start items-start flex-col gap-5">
          <h4 className="text-greenText text-xl font-bold">Deposit</h4>
          <p className="text-sm font-normal text-text">
            A user generates a random key (note) and deposits Ether or an ERC20,
            along with submitting a hash of the note to the scramble.wallet
            smart contract.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-5">
          <h4 className="text-greenText text-xl font-bold">Wait</h4>
          <p className="text-sm font-normal text-text">
            After depositing, users should wait some amount of time before
            withdrawing to improve their privacy.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-5">
          <h4 className="text-greenText text-xl font-bold">Withdraw</h4>
          <p className="text-sm font-normal text-text">
            A user submits a proof of having the valid key to one of the notes
            deposited and the contract transfers Ether or the ERC20 to a
            specified recipient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
