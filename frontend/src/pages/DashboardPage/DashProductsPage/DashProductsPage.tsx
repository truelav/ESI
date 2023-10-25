import { Button } from "@chakra-ui/react";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal"

import "./styles.css";

function DashProductsPage() {

  return (
    <>
      <div className="dash_products_page_wrapper">
        <div>
        </div>
        <div className="dash_products_nav_container">
          {/* Import Products Modal */}
          <ImportProductsModal />

           {/* ADD Product Modal */}
          <Button className="dash_products_nav_button">
            <p>Add Product</p>
          </Button>
        </div>
        <DashProductsList />
      </div>
    </>
  );
}

export default DashProductsPage;
