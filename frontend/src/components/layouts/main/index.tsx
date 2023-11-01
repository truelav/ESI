import { Outlet } from "react-router-dom";
import Header from "../../header/index";
import Footer from "../../footer";

import './styles.css'

export default function MainLayout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
