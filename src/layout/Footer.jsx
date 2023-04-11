const Footer = () => {
  return (
    <footer className="wrapper pb-5">
      <div className="contain sm:flex-row flex-col justify-between items-center gap-2">
        <p className="text-text text-[10px] flex justify-start items-center  gap-1">
          Donations address:
          <span className="text-primary sm:max-w-none max-w-[100px] truncate inline-block">
            0x8589427373D6D84E98730D7795D8f6f8731FDA16
          </span>
        </p>
        <div className="flex justify-start items-center sm:items-end flex-col">
          <p className="text-text text-[10px]">Tornado.cash v2.22</p>
          <div className="flex justify-start items-center gap-2">
            <a href="#" target="blank">
              <img src="/twitter.svg" alt="" />
            </a>
            <a href="#" target="blank">
              <img src="/telegram.svg" alt="" />
            </a>
            <a href="#" target="blank">
              <img src="/github.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
