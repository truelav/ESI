import { memo } from "react";
import { useGetSingleProductQuery } from "../../../app/api/apiSlice";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const EditProductForm = memo(() => {
  const { id } = useParams();
  console.log(id);

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  const handleOnUpdateForm = () => {}

  const handleOnSubmitForm = () => {}

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
            <input className="" id="" name="title" type="text" value={product.name} onChange={handleOnUpdateForm}/>
        </div>
        <div>
            <p>Status</p>
            <select>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
            </select>
        </div>
        <div className="">
            <p>Product Brand</p>
            <input className="" id="" name="brand" type="text" value={product.brand} onChange={handleOnUpdateForm}/>
        </div>
        <div className="">
            <p>Product Description</p>
            <input className="" id="" name="description" type="text" value={product.description} onChange={handleOnUpdateForm}/>
        </div>
        <div className="">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="ProductListItem_Image"
          />
          <input className="" id="" name="image" type="file" />
        </div>
        <div className="">
            <p>Product Description</p>
            <input className="" id="" name="description" type="text" value={product.quantity} onChange={handleOnUpdateForm}/>
        </div>
        <div>
            <Button onClick={handleOnSubmitForm}>Save Changes</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
});
