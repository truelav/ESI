import { Box, Container } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ProfileLayout() {
    const { isAdmin, isUser, id } = useAuth();

    const profileId = useParams().id
    const isHisOwnProfile = id === profileId
    console.log(isHisOwnProfile)

    if (isAdmin || (isUser && isHisOwnProfile)) {
        return (
            <Box mx={8}>
                <div className="dash_products_page_wrapper" >
                    <Outlet />
                </div>
            </Box>
        );
    }
    return (
        <>
            <Container>
                <h2>Unauthorized</h2>
            </Container>
        </>
    );
}
