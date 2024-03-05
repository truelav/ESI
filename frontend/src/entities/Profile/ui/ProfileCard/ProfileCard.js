import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Text, CardBody, Heading, } from "@chakra-ui/react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
export const ProfileCard = (props) => {
    const { username, email, role, createdAt } = props;
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsx(Text, { children: "Welcome to ESIP" }), _jsxs(Heading, { children: [" ", username] }), _jsx(ProfileHeader, { username: username, email: email, role: role, createdAt: createdAt }), _jsx(CardBody, { children: _jsx(Text, { children: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen." }) })] }) }));
};
