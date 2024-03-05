import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "@chakra-ui/react";
export const CardTextComponent = (props) => {
    const { fontSize, color, children } = props;
    return (_jsx(Text, { fontSize: fontSize, color: color, pt: 6, children: children }));
};
