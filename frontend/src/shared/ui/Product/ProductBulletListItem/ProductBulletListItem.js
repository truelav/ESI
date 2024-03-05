import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { ListItem } from "@chakra-ui/react";
export const ProductBulletListItem = (props) => {
    const { bulletItem } = props;
    return (_jsx(_Fragment, { children: _jsx(ListItem, { children: bulletItem }) }));
};
