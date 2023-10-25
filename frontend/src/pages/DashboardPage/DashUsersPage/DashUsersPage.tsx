import { Container, Text } from "@chakra-ui/react";
import { UserList } from "../../../features/users/ui/usersList/usersList";
import CreateUserModal from "../../../shared/ui/Modals/CreateUser/CreateUserModal";

function DashUsersPage() {

  return (
    <>

        <Container>
            <Text>Welcome to Users Page</Text>
        </Container>

        <Container>
                <CreateUserModal />
                <UserList />
        </Container>
        
    </>
  );
}

export default DashUsersPage;
