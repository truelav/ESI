import { Button, Text, Box, ButtonGroup } from "@chakra-ui/react";
import { UsersList } from "../../../features/users/ui/usersList/usersList";
import CreateUserModal from "../../../shared/ui/Modals/CreateUser/CreateUserModal";

function DashUsersPage() {

  return (
    <>
      <div className="">
        <div className="">
          <Box>
            <Box>
              <ButtonGroup>
                  <CreateUserModal/>

                  <Button className="dash_products_nav_button"  colorScheme='red'>
                    <Text>Delete Users</Text>
                  </Button>
              </ButtonGroup>

            </Box>
              <UsersList />
          </Box>
        </div>
      </div>
        
    </>
  );
}

export default DashUsersPage;
