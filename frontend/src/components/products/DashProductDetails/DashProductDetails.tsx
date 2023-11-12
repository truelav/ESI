import { memo } from "react";
// import { useGetSingleProductQuery } from "../../../app/api/apiSlice";
// import { useParams } from "react-router-dom";
import { EditProductForm } from "../../forms/EditProductForm";

export const DashProductDetails = memo(() => {
    //   const { id } = useParams();
    //   console.log(id);
    //   const {
    //     data: product,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error,
    //   } = useGetSingleProductQuery(id);

    return (
        <>
            <h2>Product</h2>
            <EditProductForm />
        </>
    );
});
