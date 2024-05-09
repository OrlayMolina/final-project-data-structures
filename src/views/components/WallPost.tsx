import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function WallPost() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <Aside />
        {/* Tu contenido de React aquí */}
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default WallPost;