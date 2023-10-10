import { Link, NavLink, useLocation } from "react-router-dom";

import "./styles.css";

export default function Header() {
  const { pathname } = useLocation();
  //   const navigate = useNavigate();
  // const activeStyles = {
  //     fontWeight: "bold",
  //     textDecoration: "underline",
  //     color: "#161616"
  // }

  console.log(pathname);

  return (
    <header>
      <nav>
        {/* <Link className="site-logo" to="/">
          ESI
        </Link> */}
        <NavLink
          to="/"
          className=""
          // style={({isActive}) => isActive ? activeStyles : null}
        >
          Home
        </NavLink>
        <NavLink
          to="dashboard"
          className=""
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
          Login
        </Link>
        {/* <Link to="register" className="login-link">
          Register
        </Link> */}
      </nav>
    </header>
  );
}
