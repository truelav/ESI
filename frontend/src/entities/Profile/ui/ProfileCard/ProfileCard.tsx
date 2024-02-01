import {
    Card,
    CardHeader,
    Flex,
    Avatar,
    Box,
    Heading,
    IconButton,
    Text,
    CardBody,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ProfileCard = () => {
    return (
        <>
            <Card maxW="">
                <CardHeader>
                    <Flex>
                        <Flex
                            flex="1"
                            gap="4"
                            alignItems="center"
                            flexWrap="wrap"
                        >
                            <Avatar
                                name="Segun Adebayo"
                                src="https://bit.ly/sage-adebayo"
                            />

                            <Box>
                                <Heading size="sm">Segun Adebayo</Heading>
                                <Text>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant="ghost"
                            colorScheme="gray"
                            aria-label="See menu"
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
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
