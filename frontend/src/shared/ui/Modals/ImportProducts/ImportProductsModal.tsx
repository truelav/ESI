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
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Text,
    Heading,
  } from '@chakra-ui/react'
  import { ChangeEvent, FormEvent, useState } from 'react'
  import { Link } from 'react-router-dom'
  import { useAddMultipleProductsMutation } from '../../../../app/api/apiSlice'
  import { FormResult } from '../../../../components/forms/FormResult/FormResult'

  // interface ImportProductsModalProps {
  //   isOpen: boolean,
  //   onClose: () => void
  // }

function ImportProductsModal() {
    const [addMultipleProducts, { isLoading, error, isSuccess, data }] = useAddMultipleProductsMutation()
    const [formData, setFormData] = useState({ csv: null})
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setFormData({ ...formData, csv: file });
    };

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()

      const formDataToSend = new FormData();

      if (formData.csv) {
        formDataToSend.append("csv", formData.csv);
      }

      try {
          const result = await addMultipleProducts(formDataToSend);
          console.log(result);
      } catch (error) {
          console.log(error);
      }

    } 

    let content = (
        <Box p={4}>
            <Heading>Import your products file</Heading>
            <Text>Please make user you use a .csv file and all the required fileds are filled</Text>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>.CSV File</FormLabel>
                        <Input
                            type="file"
                            name="csv"
                            accept=".csv"
                            onChange={handleFileChange}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme='blue'>Import Products</Button>
                </VStack>
            </form>

            {/* <form
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input type="file" name="csv" />
              <Button type="submit" colorScheme='blue'>Import Products</Button>
          </form> */}
        </Box>
    )

    if (isSuccess) {
        content =  (
            <FormResult
                headlineText={`Products Saved Success`}
                bodyText={JSON.stringify(data)}
            >
                <Link to={`/products`}>
                    <Button>Check Added Product</Button>
                </Link>
            </FormResult>
        );
    }

    if (error) {
        content = ( <div>...Error Adding Product: {JSON.stringify(error)}</div> )
    }

    if (isLoading) {
        content = ( <div>...Is Loading</div> )
    }

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
              {content}
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

//   <form
//   action="http://localhost:8888/api/products/addMultiple"
//   method="post"
//   encType="multipart/form-data"
// >
//   <input type="file" name="csv" />
//   <Button type="submit" colorScheme='blue'>Import Products</Button>
// </form>

  export default ImportProductsModal