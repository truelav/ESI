import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Text, ButtonGroup, Grid, GridItem, } from "@chakra-ui/react";
import { UsersList } from "../../../features/users/ui/usersList/usersList";
import CreateUserModal from "../../../shared/ui/Modals/CreateUser/CreateUserModal";
function DashUsersPage() {
    return (_jsx(_Fragment, { children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 6, children: [_jsx(GridItem, { colSpan: 12, children: _jsx(Text, { children: "Manage App Users" }) }), _jsx(GridItem, { colSpan: 4, children: _jsxs(ButtonGroup, { children: [_jsx(CreateUserModal, {}), _jsx(Button, { className: "dash_products_nav_button", colorScheme: "red", children: _jsx(Text, { children: "Delete Users" }) })] }) }), _jsx(GridItem, { colSpan: 12, children: _jsx(UsersList, {}) })] }) }));
}
export default DashUsersPage;
