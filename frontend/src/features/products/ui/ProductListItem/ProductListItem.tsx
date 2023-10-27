import { memo } from "react";
import { Button } from "@chakra-ui/react";
import { Product, ProductView } from "../../model/types/product";

import "./ProductListItem.css";

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
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </>
  );
});
