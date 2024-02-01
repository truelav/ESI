import { Container } from "@chakra-ui/react";
import { ProfileCard } from "../../entities/Profile";

const ProfilePage = () => {

    // const {
    //     data: profile,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error,
    // } = useGetProfileQuery(id);

    return (
        <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
            <ProfileCard />;
        </Container>
    )
    
};

export default ProfilePage;
