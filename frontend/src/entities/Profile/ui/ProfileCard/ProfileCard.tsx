import {
    Card,
    Text,
    CardBody,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";

import { ProfileHeader } from "../ProfileHeader/ProfileHeader";

export const ProfileCard = () => {
    return (
        <>
            <Card maxW="">
                <ProfileHeader />
                <CardBody>
                    <Text>
                        With Chakra UI, I wanted to sync the speed of
                        development with the speed of design. I wanted the
                        developer to be just as excited as the designer to
                        create a screen.
                    </Text>
                </CardBody>

                <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                        "& > button": {
                            minW: "136px",
                        },
                    }}
                >
                    <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                        Like
                    </Button>
                    <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                        Comment
                    </Button>
                    <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                        Share
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};
