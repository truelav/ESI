import { memo } from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import { Product, ProductView } from "../../../entities/Product/model/types/product";
import fallback_image from "/fallback_image.jpeg"
import "./styles.css";

interface ProductListPropsItem {
  className?: string;
  product: Product;
  view?: ProductView;
  handleToggleSelectProducts: (arg: string) => void;
}

export const DashProductListItem = memo((props: ProductListPropsItem) => {
  const { product, handleToggleSelectProducts } = props;
  return (
    <>
      <div className="dash_product_list_item_wrapper">
        <div className="dash_product_list_item_checkbox">
          <input
            type="checkbox"
            className="input_checkbox"
            onChange={() => handleToggleSelectProducts(product?._id)}
          />
        </div>
        <Link to={`/dashboard/products/${product?._id}`}>
          <div className="Dash_ProductListItem">
            <div className="Dash_ProductListItem_Container">
              <Image 
                src={product?.images}
                fallbackSrc={fallback_image}
                alt={product?.brand}
                boxSize='100px'
                objectFit='contain'
                // className="Dash_ProductListItem_Image"
              />
              <img
              />
            </div>
            <div className="Dash_ProductListItem_Container">
              <h3>{product?.brand}</h3>
            </div>
            <div className="Dash_ProductListItem_Container">
              <h3>Active</h3>
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
      </div>
    </>
  );
});
