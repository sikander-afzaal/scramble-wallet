import FaqTab from "../../components/FaqTab";

const Faq = () => {
  const FAQ__DATA = [
    {
      question:
        "Is it possible to compromise the protocol and find out information about depositors?",
      answer:
        "No, scramble.wallet is a decentralized protocol based on zero knowledge proofs. Its smart contracts are immutable, have no admins, and the proofs are based on strong cryptography. Only the user possessing the Note is able to link deposit and withdrawal.",
    },
    {
      question: "Do you collect data?",
      answer:
        "The scramble.wallet project does not collect any user data. The UI is hosted in a decentralized way on IPFS and can be accessed using following link tornadocash.eth.link. Users can also run it locally or use the CLI tool.",
    },
    {
      question:
        "Which steps can be taken to ensure the anonymity of participation in the protocol?",
      answer:
        "The scramble.wallet protocol solves only on-chain piece of the privacy. Users also must follow these best practices to achieve privacy.",
    },
    {
      question: "Has the protocol been audited?",
      answer:
        "The scramble.wallet protocol was audited by multiple professional audit companies. Here are the links of the reports:",
      list: [
        "Cryptographic overview",
        "Smart contract audit",
        "Audit of Zk-SNARK schemes",
      ],
    },
    {
      question: "What is a relayer?",
      answer:
        "Relayers are used to withdraw to an account with no ETH balance. The relayer sends a withdrawal transaction and takes a part of the deposit as compensation (the protocol itself does not collect any fees). The relayer cannot change any withdrawal data including recipient address. The scramble.wallet initial developers do not control or play any role in relaying transactions, the relay network is independent and run by community. If you want to run your own relayer, follow these instructions.",
    },
    {
      question: "Is the code open-source?",
      answer: "https://github.com/tornadocash",
    },
    {
      question: "Can I prove my source of funds if I use scramble.wallet?",
      answer:
        "Yes, you can use the compliance tool to generate a report which proves your source of funds.",
    },
    {
      question: "What is TORN contract address on etherscan?",
      answer: (
        <a
          href="https://etherscan.io/token/0x77777feddddffc19ff86db637967013e6c6a116c"
          className="truncate text-greenText inline-block lg:max-w-none max-w-[300px] w-full"
        >
          https://etherscan.io/token/0x77777feddddffc19ff86db637967013e6c6a116c
        </a>
      ),
    },
  ];
  return (
    <div className="contain flex-col justify-start mt-[80px] gap-10 sm:mt-[100px] items-center sm:items-start ">
      <h3 className="title">Frequently asked questions</h3>
      <div className="flex justify-start items-start flex-col w-full">
        {FAQ__DATA.map((elem) => {
          return <FaqTab {...elem} key={elem.question} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
