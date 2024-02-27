import { Container } from "@chakra-ui/react";
import { ProfileCard } from "../../entities/Profile";

import { useGetUserProfileQuery } from "../../app/api/apiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../entities/Profile/model/profileSlice";
import { useParams } from "react-router-dom";

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
        content = <>Loading Products...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = (
            <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
                <ProfileCard />;
            </Container>
        )
    }

    return (
        content
    )
    
};

export default ProfilePage;
