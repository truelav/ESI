import { FormControl, FormLabel, Switch } from "@chakra-ui/react"
import {useActivateDeactivateUserMutation} from "../../../../app/api/apiSlice"
import { User } from "../../../../app/api/types/User/User"

interface UserActivationProps {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    user: User
}

export const UsersActivationSwitch = (props: UserActivationProps) => {
    const { setIsActive, user } = props
    const [activateDeactivateUser, 
      { 
          isLoading, 
          isError, 
          isSuccess,
          error 
    }] = useActivateDeactivateUserMutation();
    const isAdmin = user.role === "ADMIN"
    const isActive = user.isActive
    console.log(user)

    const handleToggleUserActivation = async (id: string) => {
      console.log(id)
      await activateDeactivateUser(id)
    }

    let content = <></>

    if(isLoading){
      content = <>loading...</>
    }
    if(isError){
      content = <>Error {console.log(error)}</>
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
          {/* <Switch m="auto" id='isUserActive' onChange={() => setIsActive((state) => !state)} isDisabled={isAdmin}  isChecked={isActive}/> */}
          <Switch m="auto" id='isUserActive' onChange={() => handleToggleUserActivation(user._id)} isDisabled={isAdmin}  isChecked={isActive}/>
        </FormControl>
    )
}