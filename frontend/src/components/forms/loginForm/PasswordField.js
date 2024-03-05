import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, useDisclosure, useMergeRefs, } from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
export const PasswordField = forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef(null);
    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
        onToggle();
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    };
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "password", children: "Password" }), _jsxs(InputGroup, { children: [_jsx(InputRightElement, { children: _jsx(IconButton, { variant: "text", "aria-label": isOpen ? 'Mask password' : 'Reveal password', icon: isOpen ? _jsx(HiEyeOff, {}) : _jsx(HiEye, {}), onClick: onClickReveal }) }), _jsx(Input, { id: "password", ref: mergeRef, name: "password", type: isOpen ? 'text' : 'password', autoComplete: "current-password", required: true, ...props })] })] }));
});
PasswordField.displayName = 'PasswordField';
