import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import { updateProductsByFilter, updateProductsBySearchTerm, updateProductsBySort } from "../../model/service/filterSortAndSearchProduct";

const ProductList = (props: { products: Product[] | never[], searchTerm: string }) => {
    const { products, searchTerm } = props;
    
    const selectedFilters = useSelector(state => state.filter.selectedFilters)
    const selectedSort = useSelector(state => state.sort.selectedSort)

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        if(searchTerm){
            filteredProducts = updateProductsBySearchTerm(filteredProducts, searchTerm)
        }
        if(selectedFilters.length){
            filteredProducts = updateProductsByFilter(filteredProducts, selectedFilters)
        }
        if(selectedSort.name){
            filteredProducts = updateProductsBySort(filteredProducts, selectedSort)
        }
        return filteredProducts;

    }, [searchTerm, products, selectedFilters, selectedSort]);


    return (
        <>
            <h2>Product List: </h2>
            <div>
                {filteredAndSortedProducts.map((product: Product) => (
                    <ProductListItem key={"" + product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList
