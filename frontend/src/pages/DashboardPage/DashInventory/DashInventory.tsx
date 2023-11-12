import { Container, Text } from "@chakra-ui/react";

import { AddSingleProduct } from "../../../features/products";

function DashInventory() {
    return (
        <>
            <Container>
                <Text> Welcome to Inventory</Text>
            </Container>
            <Container>
                <Text> Coming Soon</Text>
            </Container>
            <AddSingleProduct />
        </>
    );
}

export default DashInventory;
