import { Stack, Heading, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export const FormHeader = () => {
    return (
        <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
            </Heading>
            <Link to="/contact">
                <Button>
                    <Text color="fg.muted">Don't have an account? Contact Us</Text>
                </Button>
            </Link>
            </Stack>
      </Stack>
    )
}