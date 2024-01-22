import { Text } from "@chakra-ui/react"

interface ErrorTextProps {
    errorMessage: string;
}

const ErrorText = ({ errorMessage }: ErrorTextProps) => {
    return (
        <Text
            fontSize='xl'
            color='red'
            textAlign='center'
        >
            {errorMessage}
        </Text>
    )
}

export default ErrorText