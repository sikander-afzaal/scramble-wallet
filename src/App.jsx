import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Dapp from "./pages/dapp/Dapp";

const App = () => {
  return (
    <div className="grid grid-rows-[auto__1fr__auto] min-h-screen w-full">
      <Header />
      <Dapp />
      <Footer />
    </div>
  );
};

export default App;
