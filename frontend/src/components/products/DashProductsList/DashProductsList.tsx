import { memo, useState } from "react";
import { Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Product } from "../../../entities/Product/model/types/product";

import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { DashProductListHead } from "./DashProductListHead";
import { ProductItemHorizontal } from "../../../shared/ui/Product/ProductItemHorizontal/ProductItemHorizontal";

export const DashProductsList = memo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector((state) => state.product.selectedProductIds);
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

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
    // console.log(products)

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = (
            <>
                <DashProductListHead />
                <Divider orientation="horizontal" />
                <div>
                    {products?.map((product: Product) => (
                        <ProductItemHorizontal
                            key={product._id}
                            product={product}
                            isSelected={selectedProductIds.includes(product._id)}
                            handleToggleSelectProducts={
                                handleToggleSelectProducts
                            }
                        />
                    ))}
                </div>
            </>
        );
    }

    return (
        <>
            {content}
        </>
    );
});
