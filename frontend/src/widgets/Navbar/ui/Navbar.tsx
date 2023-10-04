import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

// const router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     loader(){
//       console.log('loaded')
//     }
//   }
// ])

export const Navbar = ({ className }: NavbarProps) => {
  // const authNav = (<></>)
  // const unAuthNav = (<></>)
  return (
    <Router>
      <header className={className}>
        <div className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </header>
    </Router>
  );
};
