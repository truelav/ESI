import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input, Button, Text, Grid, GridItem } from "@chakra-ui/react";
export const ProductSearchBar = (props) => {
    const { searchTerm, setSearchTerm } = props;
    return (_jsx(_Fragment, { children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 10, children: _jsx(Input, { type: "text", name: "brand", placeholder: "Search for product...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(Button, { color: "blue", children: _jsx(Text, { children: "Search Products" }) }) })] }) }));
};
