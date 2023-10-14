import { memo } from "react";
import { Button } from "react-bootstrap";
import { useGetSingleProductQuery } from "../../../../app/api/apiSlice";

import { Link, useParams } from "react-router-dom";

// interface ProductDetailsItemProps {
//   className?: string;
//   product?: Product;
//   view?: ProductView;
// }

export const ProductDetailsItem = memo(() => {
  const { id } = useParams();
  console.log(id);
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {error}</>;
  }

  if (isSuccess) {
    content = (
      <div className="">
        <div className="">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="ProductListItem_Image"
          />
        </div>
        <div className="">
          <h3>{product?.name}</h3>
        </div>
        <div className="">
          <p>{product?.description}</p>
        </div>
        <div className="">
          <p>{product?.brand}</p>
        </div>
        <div className="">
          <p>{product?.quantity}</p>
        </div>
        <div className="">
          <Link to="">
            <Button variant="primary">Add To Cart</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2>Product</h2>
      <div>{content}</div>
    </>
  );
});
