import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

  // interface ImportProductsModalProps {
  //   isOpen: boolean,
  //   onClose: () => void
  // }

function ImportProductsModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button className="" onClick={onOpen}>
          <p>Import Products</p>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

            <ModalHeader>Import Products :</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <form
                    action="http://localhost:8888/api/products/addMultiple"
                    method="post"
                    encType="multipart/form-data"
                >
                    <input type="file" name="csv" />
                    <Button type="submit" colorScheme='blue'>Import Products</Button>
                </form>
            </ModalBody>
  
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ImportProductsModal