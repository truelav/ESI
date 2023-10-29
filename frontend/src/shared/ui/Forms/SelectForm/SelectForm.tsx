import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Field } from "formik";

interface SelectFormProps {
  className?: string;
  placeholder?: string;
  options?: string[];
  fieldName?: string;
}

export const SelectForm = (props: SelectFormProps) => {
  const { placeholder, options, fieldName } = props;
  return (
    // <Field name="role">
    //   <FormControl>
    <>
      <FormControl name={fieldName}>
        <FormLabel>{placeholder}</FormLabel>
        <Select placeholder={placeholder}>
          {options?.map((optionVal) => (
            <option value={optionVal} key={optionVal}>
              {optionVal}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
    //   </FormControl>
    // </Field>
  );
};
