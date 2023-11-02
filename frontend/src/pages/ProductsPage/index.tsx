// Products Page
import useAuth from "../../hooks/useAuth";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";

function ProductsPage() {
  const { username, role, isAdmin, isUser } = useAuth();

  if (isAdmin || isUser) {
    return (
      <>
        <h1>ESI Enterprises</h1>
        <div className="card">
          <ProductList />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Unauthorized</h2>
    </>
  );
}

export default ProductsPage;
