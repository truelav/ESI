import { memo, useState } from "react";
import { Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Product } from "../../../entities/Product/model/types/product";

import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { DashProductListHead } from "./DashProductListHead";
import { ProductItemHorizontal } from "../../../shared/ui/Product/ProductItemHorizontal/ProductItemHorizontal";

export const DashProductsList = memo(() => {
    const allProducts = useSelector((state) => state.product.products);
    // const {
    //     data: products,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error,
    // } = useGetAllProductsQuery();
    const [selectedProducts, setSelectedProducts] = useState({});
    const handleToggleSelectProducts = (id: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (selectedProducts[id]) {
            setSelectedProducts({
                ...selectedProducts,
                [id]: false,
            });
        } else {
            setSelectedProducts({
                ...selectedProducts,
                [id]: true,
            });
        }
    };
    console.log(allProducts)

    // let content = <div></div>;

    // if (isLoading) {
    //     content = <>Loading...</>;
    // }

    // if (isError) {
    //     content = <>No Products Found : {JSON.stringify(error)}</>;
    // }

    // if (isSuccess) {
    //     content = (
    //         <>
    //             <DashProductListHead />
    //             <Divider orientation="horizontal" />
    //             <div>
    //                 {allProducts?.map((product: Product) => (
    //                     <ProductItemHorizontal
    //                         key={product._id}
    //                         product={product}
    //                         handleToggleSelectProducts={
    //                             handleToggleSelectProducts
    //                         }
    //                     />
    //                 ))}
    //             </div>
    //         </>
    //     );
    // }

    return (
        <>
            <DashProductListHead />
            <Divider orientation="horizontal" />
            <div>
                {allProducts?.map((product: Product) => (
                    <ProductItemHorizontal
                        key={product._id}
                        product={product}
                        handleToggleSelectProducts={
                            handleToggleSelectProducts
                        }
                    />
                ))}
            </div>
        </>
    );
});
