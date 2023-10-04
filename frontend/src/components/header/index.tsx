
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    // const activeStyles = {
    //     fontWeight: "bold",
    //     textDecoration: "underline",
    //     color: "#161616"
    // }
    
    return (
        <header>
            <Link className="site-logo" to="/">#ESI Enterprises</Link>
            <nav>
                <NavLink 
                    to="dashboard"
                    // style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="products"
                    // style={({isActive}) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>
                <NavLink 
                    to="contact"
                    // style={({isActive}) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>
                <Link to="login" className="login-link">
                    {/* <img 
                        src="../assets/images/avatar-icon.png" 
                        className="login-icon"
                    /> */}
                    Login
                </Link>
            </nav>
        </header>
    )
}