import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Button, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

import { Order } from "../../../../app/api/types/Cart/Order";

import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

interface OrderProps {
    order: Order
}

export const OrderListItem = memo(({ order }: OrderProps) => {
    console.log(order)
    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={1}>
                    <Box>
                        <Checkbox
                            size="lg"
                            isChecked={false}
                        >
                            Check
                        </Checkbox>
                    </Box>
                </GridItem>

                <GridItem colSpan={10}>
                    <Link to={`/dashboard/orders/${order?._id}`}>
                        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?._id.slice(10)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.updatedAt.slice(10)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.user}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.products.length}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.orderSummary?.totalAmount}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.orderSummary.totalProducts}
                                </CardTextComponent>
                            </GridItem>
                        </Grid>
                    </Link>
                </GridItem>

                <GridItem colSpan={1}>
                    <Button onClick={() => console.log(order._id)}>
                        <FaTrash />
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
});
