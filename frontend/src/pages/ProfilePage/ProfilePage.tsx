import { Grid, GridItem } from "@chakra-ui/react";
import { ProfileCard } from "../../entities/Profile";

import { useGetUserProfileQuery } from "../../app/api/apiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../entities/Profile/model/profileSlice";
import { useParams } from "react-router-dom";
import { OrderList } from "../../entities/Order/ui/OrderList/OrderList";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserProfileQuery(id);

    useEffect(() => {
        if(data){
            dispatch(setUser(data))
        }
    }, [data, dispatch])

    console.log(data)

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading Profile...</>;
    }

    if (isError) {
        content = <>No Profile Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = (
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={3}>
                    <ProfileCard 
                        username={data.name}
                        email={data.email}
                        role={data.role}
                        createdAt={data.createdAt} 
                    />
                </ GridItem>    
                <GridItem colSpan={9}>
                    <OrderList orders={data.orders} />
                </GridItem>
            </ Grid>
        )
    }

    return (
        content
    )
    
};

export default ProfilePage;
