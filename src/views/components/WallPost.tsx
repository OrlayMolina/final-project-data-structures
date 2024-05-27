import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * Component representing the main layout for the wall post page.
 * Renders the header, sidebar, main content, and footer.
 * @returns {JSX.Element} The WallPost component.
 */
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