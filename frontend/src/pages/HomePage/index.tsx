import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container" id="root">
      <h2>You got products to sell or to buy ?</h2>
      <p>
        Please Login using provided credentials or{" "}
        <Link to="contact">contact us</Link> in order to sign up for an account
      </p>
      <Link to="products">Find your products</Link>
    </div>
  );
}
