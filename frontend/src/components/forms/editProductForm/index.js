import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from "react";
import { Button } from "@chakra-ui/react";
export const EditProductForm = memo((props) => {
    // const {handleOnSubmitForm, handleOnUpdateForm} = props
    return (_jsx(_Fragment, { children: _jsx("div", { className: "", children: _jsx(Button, { onClick: handleOnSubmitForm, children: "Save Changes" }) }) }));
});
