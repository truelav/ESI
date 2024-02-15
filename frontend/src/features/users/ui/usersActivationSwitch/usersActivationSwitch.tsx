import { FormControl, FormLabel, Switch } from "@chakra-ui/react"
import {useActivateDeactivateUserMutation} from "../../../../app/api/apiSlice"

interface UserActivationProps {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const UsersActivationSwitch = (props: UserActivationProps) => {
    const { isActive, setIsActive } = props
    const [activateDeactivateUser, 
      { 
          isLoading, 
          isError, 
          isSuccess,
          error 
    }] = useActivateDeactivateUserMutation();

    const handleToggleUserActivation = () => {
      activateDeactivateUser()
    }

    let content = <></>

    if(isLoading){
      content = <>loading...</>
    }
    if(isError){
      content = <>Error {error}</>
    }
    if(isSuccess){
      content = <>User {isActive ? 'deactivated': 'activated'} success</>
    }

    return (
        <FormControl display='grid' gridTemplateColumns="repeat(2, 1fr)">
          {content}
          <FormLabel htmlFor='isUserActive' m="auto">
            {isActive ? "Active" : "Disabled"}
          </FormLabel>
          <Switch m="auto" id='isUserActive' isChecked={isActive} onChange={() => setIsActive((state) => !state)} />
        </FormControl>
    )
}