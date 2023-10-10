import { Product, ProductView } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";

interface ProductListProps {
  className?: string;
  products?: Product[];
  isLoading?: boolean;
  view?: ProductView;
}

export const ProductList = (props: ProductListProps) => {
  const { className, products, isLoading } = props;

  console.log(products);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!products || !products.length) {
    return <>No Products Found</>;
  }

  return (
    <div className={className}>
      {products?.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  );
};
