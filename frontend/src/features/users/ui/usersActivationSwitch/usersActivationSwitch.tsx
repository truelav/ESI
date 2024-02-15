import { FormControl, FormLabel, Switch } from "@chakra-ui/react"
import {useActivateDeactivateUserMutation} from "../../../../app/api/apiSlice"

interface UserActivationProps {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const UsersActivationSwitch = (props: UserActivationProps) => {
    const { isActive, setIsActive } = props
    const [activateDeactivateUser, { 
          isLoading, 
          isError, 
          isSuccess,
          error 
    }] = useActivateDeactivateUserMutation();

    return (
        <FormControl display='grid' gridTemplateColumns="repeat(2, 1fr)">
          <FormLabel htmlFor='isUserActive' m="auto">
            {isActive ? "Active" : "Disabled"}
          </FormLabel>
          <Switch m="auto" id='isUserActive' isChecked={isActive} onChange={() => setIsActive((state) => !state)} />
        </FormControl>
    )
}