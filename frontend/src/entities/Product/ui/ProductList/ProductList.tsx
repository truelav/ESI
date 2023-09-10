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

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className={className}>
      {products?.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  );
};
