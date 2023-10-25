// Dashboard Page

import { Container, Placeholder } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Container>
        <h2>Welcome to Dashboard admin</h2>
        <div>
          <Container>
            <form
              action="http://localhost:8888/api/products/addMultiple"
              method="post"
              encType="multipart/form-data"
            >
              <input type="file" name="csv" />
              <button type="submit">Upload</button>
            </form>
          </Container>
          <>
            <p aria-hidden="true">
              <Placeholder xs={6} bg="primary" />
            </p>
          </>
        </div>
      </Container>
    </>
  );
}
