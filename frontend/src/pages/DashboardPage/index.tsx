import { Card, Container, Text } from "@chakra-ui/react";
import { StatComponent } from "../../components/stats/Stat/Stat";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Text>Welcome to Dashboard</Text>
      </Container>
      <Container>
        <Card>
          <StatComponent title="Products" />
        </Card>
        <Card>
          <StatComponent title="Users" />
        </Card>
      </Container>
      <Container>
        <Text>More Info will come soon</Text>
      </Container>
    </>
  );
}
