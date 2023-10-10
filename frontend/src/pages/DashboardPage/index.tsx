// Dashboard Page

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <div>
        <Link to="register">Create New User</Link>
      </div>
      <div>
        <Link to="products">Go to Products</Link>
      </div>
    </>
  );
}
