import { Button, Container, Text } from "@chakra-ui/react";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal"

import "./styles.css";

function DashProductsPage() {

  return (
    <>
      <div className="dash_products_page_wrapper">
        <div className="dash_products_nav_container">
          <Container>
            {/* Import Products Modal */}
            <ImportProductsModal />
          </Container>

           {/* ADD Product Modal */}
           <Container>
            <Button className="dash_products_nav_button">
              <Text>Add Product</Text>
            </Button>
           </Container>

           <Container>
            <Button className="dash_products_nav_button">
              <Text>Delete Products</Text>
            </Button>
          </Container>
        </div>
        <DashProductsList />
      </div>
    </>
  );
}

export default DashProductsPage;
