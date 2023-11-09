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
      <Container>
        <Text>More Info will come soon</Text>
      </Container>
      {/* <Container>
        <form
          action="http://localhost:8888/api/products/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="file" name="image" />
          <button type="submit">Upload</button>
        </form>
      </Container> */}
    </>
  );
}
