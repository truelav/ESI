import { Button, Container, Heading } from "@chakra-ui/react"
import ErrorText from "./ErrorText"


export const ErrorFallbackComponent = ({ error, resetErrorBoundary }) => {

    return (
        <Container>
            <Heading>Something went wrong</Heading>
            <ErrorText errorMessage={error.message}/>
            <Button color="blue" onClick={resetErrorBoundary}>Try Again</Button>
        </Container>
    )
}