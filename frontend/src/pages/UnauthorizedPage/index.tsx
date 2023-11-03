import { Container, Box, Text, Heading } from "@chakra-ui/react"
import { WarningTwoIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
export const UnauthorizedPage = () => {
    return (
        <>
            <Container>
                <Box textAlign="center" py={10} px={6}>
                    <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        Unauthorized Access
                    </Heading>
                    <Text color={'gray.500'}>
                        You Are trying to acces some unauthorized content, <Link to="login">login</Link> please  or <Link to="contact">Contact Us</Link>.
                    </Text>
                </Box>
            </Container>
        </>
    )
}