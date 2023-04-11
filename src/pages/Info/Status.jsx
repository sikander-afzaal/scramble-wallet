const Status = () => {
  return (
    <div className="contain flex-col justify-start mt-[80px] sm:mt-[100px] items-center ">
      <div className="text-center">
        <h3 className="title">
          Status of <span className="text-greenText">Tornado Cash</span>{" "}
          decentralization
        </h3>
        <p className="text-text text-sm">
          <span className="text-greenText font-semibold">Tornado Cash</span>{" "}
          protocol is fully decentralized and owned by the community:{" "}
          <span className="text-greenText font-semibold">Tornado Cash</span>{" "}
          initial developers have no control over it and are not running any
          servers
        </p>
      </div>
      <div className="flex justify-center items-center w-full gap-y-4 lg:gap-y-0 gap-x-4 mt-8 flex-wrap">
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-greenText font-semibold">Tornado Cash</span>{" "}
              smart contracts, circuits, and toolchain are fully open sourced.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-greenText">Tornado Cash</span> smart
              contracts are unstoppable: there are no admins and no
              upgradability. Nobody including{" "}
              <span className="text-greenText">Tornado Cash</span> initial
              developers can change it or shut it down.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              User interface is hosted by the community on IPFS. It is
              accessible as long as at least 1 user in the world is hosting it.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-greenText">Tornado Cash</span> governance
              and mining smart contracts are deployed by the community in a
              decentralized way, there is no single deployer.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              Protocol parameters and token distribution are controlled by the
              community via governance.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              Trusted setup ceremony for zkSNARKs has 1114 contributions, as
              long as at least 1 contribution is honest, the zkSNARK keys are
              secure.
            </p>
          }
        />
        <StatusBox
          text={
            <p className="text-xs text-text text-center max-w-[88%] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-greenText">Tornado Cash</span> protocol is
              developed based on awesome open source research by Zcash team with
              the help of amazing Ethereum community.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Status;

const StatusBox = ({ text }) => {
  return (
    <div className="relative w-[23%] min-w-[225px] isolate">
      <img src="/hexagon.svg" className="w-full object-contain" alt="" />
      {text}
    </div>
  );
};
