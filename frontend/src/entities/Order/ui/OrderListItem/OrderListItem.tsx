import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Button, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useCookies } from "react-cookie"
import { jwtDecode } from "jwt-decode"

import { Order } from "../../../../app/api/types/Cart/Order";
import { useDeleteOrdersMutation } from "../../../../app/api/apiSlice";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

interface OrderProps {
    order: Order
}

export const OrderListItem = memo(({ order }: OrderProps) => {
    console.log(order)
    const [cookies] = useCookies(["authToken"]);
    const user = jwtDecode(cookies.authToken)
    const [deleteOrders, { isLoading, isError, isSuccess }] = useDeleteOrdersMutation();

    if (isError) {
        return <div>...Some Error Has Occured with this Product</div>;
    }

    if (isLoading) {
        return <div>...Loading</div>;
    }

    if (isSuccess) {
        return <div>Deleted</div>;
    }

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
                                    {order?._id?.slice(10)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.updatedAt?.slice(0, 10)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {order?.user?.userEmail}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.products?.length}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {order?.orderSummary?.totalAmount}
                                </CardTextComponent>
                            </GridItem>
                        </Grid>
                    </Link>
                </GridItem>

                <GridItem colSpan={1}>
                    <Button onClick={() => deleteOrders({ user, cart: [order._id] })}>
                        <FaTrash />
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
});
