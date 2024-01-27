
import { memo } from "react";
import { useParams } from "react-router-dom";
import { DashProductDetails } from "../../../components/products/DashProductDetails/DashProductDetails";
import { useGetSingleProductQuery } from "../../../app/api/apiSlice";

const DashProductDetailsPage = memo(() => {
  const { id } = useParams() || "";

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

  if(isSuccess) {
    content = <DashProductDetails  product={product} />
  }

  return (
    <div className="dash_products_page_wrapper">
      {content}
    </div>
  );
})

export default DashProductDetailsPage;
