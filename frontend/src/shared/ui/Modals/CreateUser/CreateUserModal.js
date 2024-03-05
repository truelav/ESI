import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, } from "@chakra-ui/react";
import { CreateUserForm } from "../../../../components/forms/CreateUserForm/createUserForm";
// import RegistrationForm from '../../../../components/forms/registrationForm'
// interface ImportProductsModalProps {
//   isOpen: boolean,
//   onClose: () => void
// }
function CreateUserModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: onOpen, colorScheme: 'blue', children: _jsx("p", { children: "Create User" }) }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Create New User" }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: _jsx(CreateUserForm, { onClose: onClose }) }), _jsx(ModalFooter, { children: _jsx(Button, { colorScheme: "blue", mr: 3, onClick: onClose, children: "Close" }) })] })] })] }));
}
export default CreateUserModal;
