import {
    Button,
    Text,
    ButtonGroup,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";

import { UsersList } from "../../../features/users/ui/usersList/usersList";
import CreateUserModal from "../../../shared/ui/Modals/CreateUser/CreateUserModal";

function DashUsersPage() {
    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={12}>
                    <Text>
                        Manage App Users
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <ButtonGroup>
                        <CreateUserModal />
                        <Button
                            className="dash_products_nav_button"
                            colorScheme="red"
                        >
                            <Text>Delete Users</Text>
                        </Button>
                    </ButtonGroup>
                </GridItem>
                <GridItem colSpan={12}>
                    <UsersList />
                </GridItem>
            </Grid>
        </>
    );
}

export default DashUsersPage;
