import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { CardTextComponent } from "../../../shared/ui/Product/Card/CardText";

export const DashProductListHead = () => {
  return (
      <Card variant="outline">
        <CardBody>
            <Grid templateColumns='repeat(7, 1fr)' gap={4}>
              <GridItem colSpan={1}>
                  <CardTextComponent>
                    Select
                  </CardTextComponent>
              </GridItem>

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
                  Category
                </CardTextComponent>
              </GridItem>

              <GridItem colSpan={1}>
                <CardTextComponent>
                  Updated At
                </CardTextComponent>
              </GridItem>
          </Grid>
        </CardBody>
      </Card>
  );
};
