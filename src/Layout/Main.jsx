import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-[#e9f8ff] to-[#e9f8ff] m-0 py-0">
      <dir className='max-w-7xl mx-auto p-0 m-0 px-6'>
      <Navbar />
      <div className="md:min-h-[calc(100vh-320px)]">
        <Outlet />
      </div>
      <Footer />
      </dir>
    </div>
  );
};

export default Main;
