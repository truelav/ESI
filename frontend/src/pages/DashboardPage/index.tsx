import { Container, Text } from "@chakra-ui/react";
import { StatGroup } from "../../components/stats/StatGroup/StatGroup";

export default function Dashboard() {
    return (
        <>
            <Container>
                <Text>Welcome to Dashboard</Text>
            </Container>
            <StatGroup />
            <StatGroup />
        </>
    );
}
