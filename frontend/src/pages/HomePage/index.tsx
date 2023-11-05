import { Link } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
// import ImportProductsModal from "../../shared/ui/Modals/ImportProducts/ImportProductsModal";

export default function Home() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container bg="#ededee" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <div className="home-container" id="root">
          <h2>You got products to sell or to buy ?</h2>
          <p>
            Please Login using provided credentials or{" "}
            <Link to="contact">contact us</Link> in order to sign up for an
            account
          </p>
          {/* <Button className="" onClick={onOpen}>
              <p>Import Products</p>
        </Button> */}
          {/* <ImportProductsModal isOpen={isOpen} onClose={onClose}/> */}
          <Link to="products">Find your products</Link>
        </div>
      </Flex>
    </Container>
  );
}
