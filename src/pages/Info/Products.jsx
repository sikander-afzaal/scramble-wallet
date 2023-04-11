const Products = () => {
  return (
    <div className="contain flex-col justify-start mt-[80px] gap-10 sm:mt-[100px] items-center sm:items-start ">
      <h3 className="title">Our Products</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
        <ProductCard
          img="/governance.svg"
          title="Governance"
          text="Tornado Cash is completely decentralized, controlled and governed by its community. By acquiring TORN tokens, you can participate by voting on governance proposals and weighing in on the evolution of the protocol."
        />
        <ProductCard
          img="/mining.svg"
          title="Anonymity Mining"
          text="By using Tornado Cash, you also mine TORN, the governance token of Tornado Cash. The more you use it, the more say you have in the evolution of the protocol."
        />
        <ProductCard
          img="/compliance.svg"
          title="Compliance"
          text="Maintaining financial privacy is essential to preserving our freedoms. Tornado Cash has built-in tools for proving your transaction history and selectively disclosing Tornado deposits."
        />
        <ProductCard
          img="/trusted.svg"
          title="Trusted Setup Ceremony"
          text="Trusted setup ceremony for zkSNARKs has 1114 contributions, as long as at least 1 contribution is honest, the zkSNARK keys are secure."
        />
        <ProductCard
          img="/airdrop.svg"
          title="Initiation"
          text="Tornado Cash Governance protocol was deployed by community in a decentralized way. It's only possible using CREATE2 opcode and EIP-2470 deployer."
        />
      </div>
    </div>
  );
};

export default Products;

const ProductCard = ({ img, title, text }) => {
  return (
    <div className="w-full flex justify-start sm:flex-row flex-col items-start gap-8">
      <img src={img} className="w-[120px] sm:w-[120px] object-contain" alt="" />
      <div className="flex justify-start items-start flex-col gap-3">
        <h3 className="text-greenText text-xl font-bold">{title}</h3>
        <p className="text-text text-sm ">{text}</p>
        <a
          href="#"
          className="text-sm text-greenText underline hover:no-underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
