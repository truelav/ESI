/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Select,
  Text
} from "@chakra-ui/react";
import ErrorText from "../../../shared/ui/Error/ErrorText";
import { useAddUserMutation } from "../../../app/api/apiSlice";

interface CreateUserFormProps {
  onClose: () => void;
}

export function CreateUserForm({ onClose }: CreateUserFormProps) {
  const [ addUser, 
    // { 
    //   isLoading: isLoadingCreateUser, 
    //   error: errorCreateUser, 
    //   isSuccess: isSuccessCreateUser 
    // }
  ] = useAddUserMutation();
  const RolesOptions = ["CUSTOMER", "ADMIN"];

  // let content = <></>
  
  // if(isLoadingCreateUser){
  //   content = (<>Signup Loading ...</>)
  // }

  // if(errorCreateUser){
  //   content = (
  //     <>
  //       <ErrorText errorMessage={`An error has occured while Signing Up, please try again later`}/>
  //       <ErrorText errorMessage={`${errorCreateUser}`}/>
  //     </>
  //   )
  // } 

  // if(isSuccessCreateUser){
  //     content = (
  //       <>
  //         <Text>User Created with Success</Text>
  //       </>
  //     )
  // }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        role: "CUSTOMER",
        isActive: true,
      }}
      onSubmit={async (values, actions) => {
        console.log(values);
        const response = await addUser(values).unwrap();
        console.log(response);
        actions.resetForm();
        onClose();
      }}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="your name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder="password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="role">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Role</FormLabel>
                <Select onChange={field.onChange} name="role" value="role">
                  {RolesOptions?.map((optionVal) => (
                    <option value={optionVal} key={optionVal}>
                      {optionVal}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
