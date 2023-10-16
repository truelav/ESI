import { memo } from "react";
import { useGetSingleProductQuery } from "../../../app/api/apiSlice";
import { useParams } from "react-router-dom";

export const DashProductDetails = memo(() => {
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
            <p>Title</p>
            <input className="" id="" name="title" type="text" value={product.name}/>
        </div>
        <div className="">
            <p>Product Brand</p>
            <input className="" id="" name="brand" type="text" value={product.brand}/>
        </div>
        <div className="">
            <p>Product Description</p>
            <input className="" id="" name="description" type="text" value={product.description}/>
        </div>
        <div className="">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="ProductListItem_Image"
          />
        </div>
        <div className="">
            <p>Product Description</p>
            <input className="" id="" name="description" type="text" value={product.quantity}/>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2>Product</h2>
      <div>

      </div>
      <div>{content}</div>
    </>
  );
});
