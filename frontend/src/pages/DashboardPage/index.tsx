// Dashboard Page

import { Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Container>
        <h2>Welcome to Dashboard admin</h2>
        <div>
        <form action="http://localhost:8888/api/products/addMultiple" method="post" encType="multipart/form-data">
          <input type="file" name="csv" />
          <button type="submit">Upload</button>
        </form>
        </div>
      </Container>
    </>
  );
}
