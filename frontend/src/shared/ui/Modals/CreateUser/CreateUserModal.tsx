import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { CreateUserForm } from "../../../../components/forms/CreateUserForm/createUserForm";
// import RegistrationForm from '../../../../components/forms/registrationForm'

// interface ImportProductsModalProps {
//   isOpen: boolean,
//   onClose: () => void
// }

function CreateUserModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button className="" onClick={onOpen}>
        <p>Create User</p>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New User</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            {/* <RegistrationForm /> */}
            <CreateUserForm onClose={onClose} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateUserModal;
