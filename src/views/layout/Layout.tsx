import { CustomProps } from "../../classes.typescript/interfaces/CustomPropsModal";
import { selectModalSeller } from "../../redux/features/seller/seller.slice";
import Sidebar from "../components/Sidebar";
import { FiMessageSquare } from "react-icons/fi";
import ModalPost from "../components/ModalPost";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const customStyles: CustomProps = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root');

export default function Layout(): JSX.Element {

    const modal = useSelector(selectModalSeller);
    const [isChatFloating, setIsChatFloating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setIsChatFloating(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Header />
            <div className="md:flex mb-16">
                <div className="md:w-2/12" >
                    <Sidebar/>   
                </div>
                <div className="md:w-10/12 bg-gray-50">
                    
                    <main className="relative">
                        <Outlet />
                        {/* bubble talk */}
                        <div className={`absolute right-8 bg-orange-500 text-white cursor-pointer rounded-full p-3 flex items-center transition-transform duration-300 ${isChatFloating ? 'transform translate-y-0' : 'transform translate-y-20'}`}>
                            <FiMessageSquare className="text-xl mr-2" />
                            <span className="text-sm">Need help?</span>
                        </div>
                    </main>
                    
                </div>
            </div>
            <Footer />

            <Modal isOpen={modal} style={customStyles}>
                <ModalPost />
            </Modal>
        </>
    )
}
