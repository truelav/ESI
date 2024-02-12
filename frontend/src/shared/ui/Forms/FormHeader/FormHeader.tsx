import { Stack, Heading, Button, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom";

export const FormHeader = () => {
    const { pathname } = useLocation()
    console.log(pathname)

    let content = <></>

    if(pathname === "/login"){
        content = (
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                    Don't have an account?
                </Heading>
                <Link to="/signup">
                    <Button>
                        <Text color="fg.muted">Go To Signup</Text>
                    </Button>
                </Link>
            </Stack>
        )
    } else if(pathname === "/signup"){
        content = (
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                    Your account is authenticated?
                </Heading>
                <Link to="/login">
                    <Button>
                        <Text color="fg.muted">Go To Login</Text>
                    </Button>
                </Link>
            </Stack>
        )
    }

    return (
        <Stack spacing="6">
            {content}
      </Stack>
    )
}