// Dashboard Page

import { Container, Text } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const { username, role, isAdmin } = useAuth();

  if (isAdmin) {
    return (
      <>
        <Container>
          <Text>
            Welcome to Dashboard {username} : {role}
          </Text>
        </Container>
        <Container>
          <Text>More Info will come soon</Text>
        </Container>
      </>
    );
  }
  return <>Unauthorized</>;
}
