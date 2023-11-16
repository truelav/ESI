import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const EditProductForm = memo((props) => {
  // const {handleOnSubmitForm, handleOnUpdateForm} = props
  return (
    <>
        <div className="">
            <Button onClick={handleOnSubmitForm}>Save Changes</Button>
        </div>
    </>
  );
});
