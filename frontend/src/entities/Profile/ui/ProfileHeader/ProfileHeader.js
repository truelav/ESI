import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardHeader, Avatar, Box } from "@chakra-ui/react";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
export const ProfileHeader = (props) => {
    const { username, email, role, createdAt } = props;
    return (_jsxs(CardHeader, { children: [_jsx(Box, { children: _jsx(Avatar, { src: "", name: username, size: "lg", objectFit: "contain" }) }), _jsx(Box, { children: _jsxs(CardTextComponent, { children: ["Email: ", email] }) }), _jsx(Box, { children: _jsxs(CardTextComponent, { children: ["Role: ", role] }) }), _jsx(Box, { children: _jsxs(CardTextComponent, { children: ["Created: ", createdAt.slice(0, 10)] }) })] }));
};
