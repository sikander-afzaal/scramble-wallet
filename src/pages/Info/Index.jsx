import Faq from "./Faq";
import Hero from "./Hero";
import Privacy from "./Privacy";
import Products from "./Products";
import Status from "./Status";

const Info = () => {
  return (
    <div className="wrapper py-16">
      <Hero />
      <Privacy />
      <Status />
      <Products />
      <Faq />
    </div>
  );
};

export default Info;
