import { Stack, Heading, Button, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom";

export const FormHeader = () => {
    const { pathname } = useLocation()
    console.log(pathname)

    let content = <></>

    if(pathname === "/login"){
        content = (
            <Link to="/signup">
                <Button>
                    <Text color="fg.muted">Don't have an account? Sign Up for once</Text>
                </Button>
            </Link>
        )
    } else if(pathname === "/signup"){
        content = (
            <Link to="/login">
                <Button>
                    <Text color="fg.muted">Your account is authenticated? Login</Text>
                </Button>
            </Link>
        )
    }

    return (
        <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
            </Heading>
                {content}
            </Stack>
      </Stack>
    )
}