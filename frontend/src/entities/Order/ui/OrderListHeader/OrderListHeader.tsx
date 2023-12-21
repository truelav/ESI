import { Grid, GridItem, Button, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

export const OrderListHeader = () => {

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={1}>
                    <Box>
                        Check
                    </Box>
                </GridItem>

                <GridItem colSpan={10}>
                    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                Order Id
                            </CardTextComponent>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                Date
                            </CardTextComponent>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                User
                            </CardTextComponent>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                Products X
                            </CardTextComponent>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                Total Amount
                            </CardTextComponent>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <CardTextComponent>
                                Total Products
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
