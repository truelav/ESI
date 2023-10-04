import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container" id="root">
            <h1>You got products to sell or to buy.</h1>
            <p>Please Login using provided credentials.</p>
            <Link to="products">Find your products</Link>
        </div>
    )
}