import { memo, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { Product } from "../../../entities/Product/model/types/product";
import { selectAllProducts, deselectAllProducts } from "../../../entities/Product/model/slice/productSlice";

import { DashProductListHead } from "./DashProductListHead";
import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { ProductItem } from "../../../shared/ui/Product/ProductItem/ProductItem";

export const DashProductsList = memo(() => {

    const dispatch = useDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const [areAllProductsSelected, setAreAllProductsSelected] = useState(false)
    const allProductIds = data?.allProducts.map((product: Product) => product._id)
    const handleToggleSelectAllProducts = () => {
        if(areAllProductsSelected){
            dispatch(deselectAllProducts())
            setAreAllProductsSelected(false)
        } else {
            dispatch(selectAllProducts(allProductIds))  
            setAreAllProductsSelected(true)
        }
    }

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

                {data?.allProducts?.length > 0 && (
                    <Button onClick={() => handleToggleSelectAllProducts() }>
                        <Text>{areAllProductsSelected ? `Deselect All Products` : `Select All Products`}</Text>
                    </Button>
                )}

                {data?.allProducts?.map((product: Product) => (
                    <ProductItem
                        key={product._id}
                        product={product}
                    />
                ))}
            </>
        );
    }

    return (
        <>
            {content}
        </>
    );
});
