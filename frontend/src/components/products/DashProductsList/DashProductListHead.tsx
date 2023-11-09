import { Grid, GridItem } from "@chakra-ui/react";
import CardComponent from "../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../shared/ui/Product/Card/CardText";

export const DashProductListHead = () => {
  return (
        <CardComponent>

          <Grid templateColumns='repeat(12, 1fr)' gap={4}>

            <GridItem colSpan={1}>
                  <CardTextComponent>
                    Select
                  </CardTextComponent>
              </GridItem>

            <GridItem colSpan={10}>
              <Grid templateColumns='repeat(6, 1fr)' gap={4}>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Prod Image
                  </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Brand
                    </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Model
                  </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Status
                  </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Quantity
                  </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                  <CardTextComponent>
                    Updated At
                  </CardTextComponent>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem colSpan={1}>
                <CardTextComponent>
                  Delete 
                </CardTextComponent>
            </GridItem>
          </Grid>
      </CardComponent>
  );
};
