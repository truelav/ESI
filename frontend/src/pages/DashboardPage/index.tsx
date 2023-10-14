// Dashboard Page

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <div>
        <Button>
          <Link to="register">Users</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link to="products">Products</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link to="presentations">Presentations</Link>
        </Button>
      </div>
    </>
  );
}
