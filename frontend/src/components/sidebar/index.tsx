import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Sidebar() {
  return (
    <>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-navlink">
          Dashboard
        </NavLink>
        <NavLink to="products" className="sidebar-navlink">
          Products
        </NavLink>
        <NavLink to="inventory" className="sidebar-navlink">
          Inventory
        </NavLink>
        <NavLink to="users" className="sidebar-navlink">
          Users
        </NavLink>
        <NavLink to="presentation" className="sidebar-navlink">
          Presentations
        </NavLink>
      </nav>
    </>
  );
}
