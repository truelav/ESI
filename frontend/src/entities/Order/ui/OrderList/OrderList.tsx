import { Box, Text } from "@chakra-ui/react";
import { Order } from "../../../../app/api/types/Cart/Order";
import { OrderListHeader } from "../OrderListHeader/OrderListHeader";
import { OrderListItem } from "../OrderListItem/OrderListItem";

export const OrderList = (props: { orders: Order[] }) => {
    const { orders } = props;

    let orderListContent = <></>

    if(orders.length > 0){
        orderListContent = (
           <>
                {orders.map((order: Order) => (
                    <OrderListItem order={order} key={order._id}/>
                ))}
           </> 
        )
    } 

    if(orders.length === 0){
       orderListContent = (
            <Box my={8}>
                <Text>No Orders Yet, please add products to cart and submit interested products as an order so we can get back to you with more details.</Text> 
            </Box>    
       ) 
    }

    return (
        <>
            <h2>Orders History: </h2>
            <div>
                <OrderListHeader />
                {orderListContent}
            </div>
        </>
    );
};
