import { Container, Text,   Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box
} from "@chakra-ui/react";
import { memo } from "react";

import { useGetGroupedProductsQuery } from "../../../app/api/apiSlice";
import { GroupedProducts } from "../../../app/api/types/Product";
import { Product } from "../../../entities/Product/model/types/product";

const DashPresentationPage = memo(() => {

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGroupedProductsQuery();

  // const groupedProducts = groupProductsByCategory(data)

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
        <Accordion>
          {data.map((brandGroup : GroupedProducts) => (
              <AccordionItem key={brandGroup.brand}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {brandGroup.brand}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                      {brandGroup.products.map((product: Product) => (
                        <div key={product._id}>
                          {product.model}
                        </div>
                      ))}
                  </AccordionPanel>
              </AccordionItem>
          ))}
        </Accordion>
      </>
    );
  }


  return (
    <>
        <Container>
            <Text>Welcome to Presentation Page</Text>
        </Container>

      {content}
    </>
  );
})

export default DashPresentationPage;
