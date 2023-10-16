import { memo } from "react";
import { Product, ProductView } from "../../../app/api/types/product";

import "./styles.css";
import { Link } from "react-router-dom";

interface ProductListPropsItem {
  className?: string;
  product?: Product;
  view?: ProductView;
}

export const DashProductListItem = memo((props: ProductListPropsItem) => {
  const { product } = props;
  return (
    <>
        <Link to={`/dashboard/products/${product?._id}`}>
            <div className="Dash_ProductListItem">
                <div className="Dash_ProductListItem_Container">
                    <img
                        src={product?.images[0]}
                        alt={product?.name}
                        className="Dash_ProductListItem_Image"
                    />
                </div>
                <div className="Dash_ProductListItem_Container">
                    <h3>Active</h3>
                </div>
                <div className="Dash_ProductListItem_Container">
                    <h3>{product?.name}</h3>
                </div>
                <div className="Dash_ProductListItem_Container">
                    <p>{product?.quantity}</p>
                </div>
                <div className="Dash_ProductListItem_Container">
                    <p>{product?.brand}</p>
                </div>
                <div className="Dash_ProductListItem_Container">
                    <p>{product?.category}</p>
                </div>
                <div className="Dash_ProductListItem_Container">
                    <p>{product?.updatedAt}</p>
                </div>
            </div>
        </Link>
    </>
  );
});
