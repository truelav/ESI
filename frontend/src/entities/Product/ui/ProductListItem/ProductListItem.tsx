import { memo } from "react";
import { Button } from "react-bootstrap";
import { Product, ProductView } from "../../model/types/product";

import "./ProductListItem.css";
import { Link } from "react-router-dom";

interface ProductListPropsItem {
  className?: string;
  product?: Product;
  view?: ProductView;
}

export const ProductListItem = memo((props: ProductListPropsItem) => {
  const { product } = props;

  return (
    <>
      <div className="ProductListItem">
        <div className="ProductListItem_Container">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="ProductListItem_Image"
          />
        </div>
        <div className="ProductListItem_Container">
          <h3>{product?.name}</h3>
        </div>
        <div className="ProductListItem_Container">
          <p>{product?.brand}</p>
        </div>
        <div className="ProductListItem_Container">
          <p>{product?.quantity}</p>
        </div>
        <div className="ProductListItem_Container">
          <Link to={`/products/${product?._id}`}>
            <Button variant="primary">Learn More</Button>
          </Link>
        </div>
      </div>
    </>
  );
});
