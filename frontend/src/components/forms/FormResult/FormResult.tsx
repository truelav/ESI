import { Box, Heading, Text } from "@chakra-ui/react";
import {
    CheckCircleIcon,
    //     InfoIcon,
    //     WarningIcon,
    //     CloseIcon,
} from "@chakra-ui/icons";
import { ReactNode } from "react";

// export enum ResultIcons {
//     SUCCESSICON = CheckCircleIcon,
//     INFOICON = InfoIcon,
//     WARNINGICON = WarningIcon,
//     CLOSEICON = CloseIcon,
// }

interface FormResultProps {
    color?: string;
    headlineText: string;
    bodyText: string;
    children?: ReactNode;
}

export const FormResult = (props: FormResultProps) => {
    const { headlineText, bodyText, children } = props;
    return (
        <>
            <Box textAlign="center" py={10} px={6}>
                <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    {headlineText}
                </Heading>
                <Text color={"gray.500"}>{bodyText}</Text>
                {children}
            </Box>
        </>
    );
};
