import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import { updateProductsByFilter, updateProductsBySearchTerm, updateProductsBySort, updateProductsByFilterCategoryAndSubcategory } from "../../model/service/filterSortAndSearchProduct";

const ProductList = (props: { products: Product[] | never[], searchTerm: string }) => {
    const { products, searchTerm } = props;
    
    const selectedCategories = useSelector(state => state.filter.categories)
    const selectedSubCategories = useSelector(state => state.filter.subcategories)
    const selectedFilters = useSelector(state => state.filter.selectedFilters)
    const selectedSort = useSelector(state => state.sort.selectedSort)

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        if(searchTerm){
            filteredProducts = updateProductsBySearchTerm(filteredProducts, searchTerm)
        }
        // if(selectedFilters.length){
        //     filteredProducts = updateProductsByFilter(filteredProducts, selectedFilters)
        // }
        if(selectedCategories.length || selectedSubCategories.length){
            filteredProducts = updateProductsByFilterCategoryAndSubcategory(filteredProducts, selectedCategories, selectedSubCategories)
        }
        if(selectedSort.name){
            filteredProducts = updateProductsBySort(filteredProducts, selectedSort)
        }
        return filteredProducts;

    }, [searchTerm, products, selectedSort, selectedCategories, selectedSubCategories]);


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
