import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";

const ProductList = (props: { products: Product[] | never[] }) => {
    const { products } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const selectedFilters = useSelector(state => state.filter.selectedFilters)
    const selectedSort = useSelector(state => state.sort.selectedSort)

    console.log(selectedSort)

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        if (searchTerm) {
            filteredProducts = filteredProducts.filter((product) =>
                product.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        }

        if (selectedFilters.length) {
            filteredProducts = filteredProducts.filter((product: Product) =>
                selectedFilters.includes(product.category)
            );
        }

        if (selectedSort.name) {
            const newFilteredProducts = [...filteredProducts];
            const sortBy: string = selectedSort.name

            newFilteredProducts.sort((a: Product, b: Product) => {
                if(selectedSort.ascending){
                    return a[sortBy] > b[sortBy] ? 1 : -1;
                } else {
                    return a[sortBy] > b[sortBy] ? -1 : 1;
                }
            });
            filteredProducts = [...newFilteredProducts];
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
