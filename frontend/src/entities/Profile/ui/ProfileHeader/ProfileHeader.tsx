import { CardHeader, Flex, Avatar, Box, Text, Heading, IconButton } from "@chakra-ui/react"
import { BsThreeDotsVertical } from "react-icons/bs";

export const ProfileHeader = () => {
    return (
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
    )
}