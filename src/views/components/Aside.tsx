import { selectSellerLogged, selectUserLogged } from "../../redux/features/social.media/social.media.slice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/Aside.css";
import { Seller } from "../../classes.typescript/models/Sellers";

/**
 * Aside component displaying seller-specific information and navigation links.
 * Redirects to login page if user is not logged in.
 * @returns {JSX.Element} The Aside component.
 */
export default function Aside() {

    const navigate = useNavigate();
    const userLogged = useSelector(selectUserLogged);
    const sellerLogged: Seller | null = useSelector(selectSellerLogged);

    if (!userLogged) {
        navigate("/account/login");
    }

    if (!sellerLogged) {
        // Manejar el caso en que sellerLogged es null
        return <div className="aside-container m-8">Loading...</div>;
    }

    return (
        <div className="aside-container m-8 my-12">
            <h1 className="aside-title">{sellerLogged.getName() +' '+ sellerLogged.getLastName()}</h1>
            <ul className="aside-menu text-lg">
                <li><Link to="/wallpost">Personal Information</Link></li>
                <li><Link to="#">Contacts</Link></li>
                <li><Link to="/wallpost/request-sent">Request Sent</Link></li>
                <li><Link to="#">Request Received</Link></li>
                <li><Link to="#">Chats</Link></li>
                <li><Link to="#">Statistics</Link></li>
            </ul>
        </div>
    );
}
