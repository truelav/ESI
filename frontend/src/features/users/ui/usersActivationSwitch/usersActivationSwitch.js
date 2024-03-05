import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useActivateDeactivateUserMutation } from "../../../../app/api/apiSlice";
export const UsersActivationSwitch = (props) => {
    const { user } = props;
    const [activateDeactivateUser, { isLoading, isError, isSuccess, error }] = useActivateDeactivateUserMutation();
    const isAdmin = user.role === "ADMIN";
    const isActive = user.isActive;
    console.log(user);
    const handleToggleUserActivation = async (id) => {
        console.log(id);
        await activateDeactivateUser(id);
    };
    let content = _jsx(_Fragment, {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "loading..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["Error ", console.log(error)] });
    }
    if (isSuccess) {
        content = _jsxs(_Fragment, { children: ["User ", isActive ? 'deactivated' : 'activated', " success"] });
    }
    return (_jsxs(FormControl, { display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", children: [content, _jsx(FormLabel, { htmlFor: 'isUserActive', m: "auto", children: isActive ? "Active" : "Disabled" }), _jsx(Switch, { m: "auto", id: 'isUserActive', onChange: () => handleToggleUserActivation(user._id), isDisabled: isAdmin, isChecked: isActive })] }));
};
