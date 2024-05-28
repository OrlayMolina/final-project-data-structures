import { CustomProps } from "../../classes.typescript/interfaces/CustomPropsModal";
import { selectModalSeller } from "../../redux/features/seller/seller.slice";
import { selectModalComments } from "../../redux/features/post/post.slice";
import ModalComments from "../components/ModalComments";
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

const customStylesComments: CustomProps = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        height: "360px",
        width: "80%", // Adjust width
        maxWidth: "600px", // Set a maximum width
        padding: "20px", // Add padding
        borderRadius: "10px", // Add border-radius for rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
        backgroundColor: "#fff", // Ensure background color is set
    },
};

Modal.setAppElement('#root');

/**
 * Component representing the general layout for the application.
 * Manages floating chat behavior based on scroll position.
 * @returns {JSX.Element} The Layout component.
 */
export default function Layout(): JSX.Element {

    const modal = useSelector(selectModalSeller);
    const modalComments = useSelector(selectModalComments);
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

            <Modal isOpen={modalComments} style={customStylesComments}>
                <ModalComments />
            </Modal>
        </>
    )
}
