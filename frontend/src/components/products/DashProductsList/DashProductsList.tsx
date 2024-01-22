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
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const [areAllProductsSelected, setAreAllProductsSelected] = useState(false)
    const allProductIds = products?.map((product: Product) => product._id)

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

                {products?.length > 0 && (
                    <Button onClick={() => handleToggleSelectAllProducts() }>
                        <Text>{areAllProductsSelected ? `Deselect All Products` : `Select All Products`}</Text>
                    </Button>
                )}

                <div>
                    {products?.map((product: Product) => (
                        <ProductItem
                            key={product._id}
                            product={product}
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
