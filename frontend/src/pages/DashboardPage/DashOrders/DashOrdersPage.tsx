import { Container, Text } from "@chakra-ui/react";

import { useGetAllOrdersQuery } from "../../../app/api/apiSlice";
import { OrderList } from "../../../entities/Order/ui/OrderList/OrderList";

function DashOrders() {
    const {
        data: ordersData,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllOrdersQuery();

    let content = (<div></div>)

    if(isLoading){
        return (<p>Loading..</p>)
    } 

    if (isError) {
        return  <p className="errmsg">No Users found {JSON.stringify(error)}</p>
    }

    if (isSuccess) {
        content = (
            <div>
                <Container>
                    <Text> Welcome to Orders</Text>
                </Container>
                <OrderList orders={ordersData} />
            </div>
        )
    }
    console.log(ordersData)
  
    return content
}

export default DashOrders