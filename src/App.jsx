import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Dapp from "./pages/dapp/Dapp";
import Info from "./pages/Info/Index";

const App = () => {
  return (
    <div className="grid grid-rows-[auto__1fr__auto] min-h-screen w-full">
      <Header />
      <Routes>
        <Route element={<Dapp />} path="/" />
        <Route element={<Info />} path="/info" />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
