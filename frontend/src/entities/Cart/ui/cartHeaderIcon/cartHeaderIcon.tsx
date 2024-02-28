import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { MdShoppingCart } from 'react-icons/md';


export const CartHeaderIcon = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
  // @ts-ignore 
    const products = useSelector((state) => state.profile.cart);
    const isCartEmpty = (products.length === 0)
    const cartItems = products.length
    return (
        <Link to="/cart">
            <div className="cart">
                <span className="cart-icon">
                    <MdShoppingCart size={32} />
                </span>
                <span className={!isCartEmpty ? "count" : ""}>{!isCartEmpty ? cartItems : ""} </span>
            </div>
      </Link>
    )
}