import { Button, Text, Box } from "@chakra-ui/react";
import { UsersList } from "../../../features/users/ui/usersList/usersList";
import CreateUserModal from "../../../shared/ui/Modals/CreateUser/CreateUserModal";

function DashUsersPage() {

  return (
    <>
      <div className="">
        <div className="">
          <Box>
              <Text>Welcome to Users Page</Text>
          </Box>

          <Box>
            <Box>
              <Box>
                  <CreateUserModal />
              </Box>
              <Box>
                  <Button className="dash_products_nav_button">
                    <Text>Delete Users</Text>
                  </Button>
              </Box>
            </Box>
              <UsersList />
          </Box>
        </div>
      </div>
        
    </>
  );
}

export default DashUsersPage;
