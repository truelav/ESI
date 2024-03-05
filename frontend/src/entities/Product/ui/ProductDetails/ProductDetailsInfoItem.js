import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Heading } from "@chakra-ui/react";
export const ProductDetailsInfoItem = (props) => {
    const { productInfo, info, color, size, element } = props;
    let content = _jsx(_Fragment, {});
    if (element === "TEXT") {
        content = (_jsxs(Text, { color: color, fontSize: size, children: [info, " ", productInfo] }));
    }
    else if (element === "HEADING") {
        content = (_jsxs(Heading, { color: color, size: size, my: 2, children: [info, " ", productInfo] }));
    }
    return (content);
};
