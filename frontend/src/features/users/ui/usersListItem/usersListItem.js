import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { Grid, GridItem, Avatar, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, { CardVariants, } from "../../../../shared/ui/Product/Card/CardComponent";
import { useDeleteUserMutation } from "../../../../app/api/apiSlice";
import { UsersActivationSwitch } from "../usersActivationSwitch/usersActivationSwitch";
export const UsersListItem = memo((props) => {
    const { user } = props;
    const [deletePost] = useDeleteUserMutation();
    const [isActive, setIsActive] = useState(user.isActive);
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2, children: _jsx(Avatar, { src: "", name: user.name, size: "lg", objectFit: "contain" }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: user.name }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: user.email }) }), _jsx(GridItem, { colSpan: 2, display: 'flex', children: _jsx(UsersActivationSwitch, { isActive: isActive, setIsActive: setIsActive, user: user }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: user?.role ? user.role : "unknown" }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: user.createdAt }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(Button, { onClick: () => deletePost(user._id), children: _jsx(FaTrash, {}) }) })] }) }));
});
