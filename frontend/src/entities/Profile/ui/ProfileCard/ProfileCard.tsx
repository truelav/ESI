import {
    Card,
    Text,
    CardBody,
    Heading,
} from "@chakra-ui/react";

import { ProfileHeader } from "../ProfileHeader/ProfileHeader";

export const ProfileCard = (props) => {
    const { username, email, role, createdAt } = props
    return (
        <>
            <Card>
                <Heading>Welcome to ESiP {username}</Heading>
                <ProfileHeader 
                    username={username}
                    email={email}
                    role={role}
                    createdAt={createdAt} 
                />
                <CardBody>
                    <Text>
                        With Chakra UI, I wanted to sync the speed of
                        development with the speed of design. I wanted the
                        developer to be just as excited as the designer to
                        create a screen.
                    </Text>
                </CardBody>
            </Card>
        </>
    );
};
