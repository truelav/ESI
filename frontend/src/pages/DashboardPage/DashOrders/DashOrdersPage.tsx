import { Container, Text } from "@chakra-ui/react";

import { useGetAllOrdersQuery } from "../../../app/api/apiSlice";

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
                {/* {usersData?.map((user: User) =>  (
                        <UsersListItem user={user} key={user._id} />
                ))} */}
            <Container>
                <Text> Welcome to Orders</Text>
            </Container>
            <Container>
                <Text> Coming Soon</Text>
            </Container>
            </div>
        )
    }
    console.log(ordersData)
  
    return content
}

export default DashOrders