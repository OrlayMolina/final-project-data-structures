import { CustomProps } from "../../classes.typescript/interfaces/CustomPropsModal";
import { selectModalSeller } from "../../redux/features/seller/seller.slice";
import ModalPost from "../components/ModalPost";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
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
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

            <Modal isOpen={modal} style={customStyles}>
                <ModalPost />
            </Modal>
        </>
    )
}
