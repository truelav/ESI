import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "@chakra-ui/react";
const ErrorText = ({ errorMessage }) => {
    return (_jsx(Text, { fontSize: 'xl', color: 'red', textAlign: 'center', children: errorMessage }));
};
export default ErrorText;
