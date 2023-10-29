/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useAddUserMutation } from "../../../app/api/apiSlice";

interface CreateUserFormProps {
  onClose: () => void;
}

export function CreateUserForm({ onClose }: CreateUserFormProps) {
  const [addNewUser] = useAddUserMutation();
  const RolesOptions = ["USER", "ADMIN", "MODERATOR"];
  function validateName() {
    let error;
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    return error;
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        role: "USER",
        isActive: true,
      }}
      onSubmit={async (values, actions) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log(values);
        const response = await addNewUser(values).unwrap();
        console.log(response);
        actions.resetForm();
        onClose();
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="your name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder="password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="role" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>User Role</FormLabel>
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
