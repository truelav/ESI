import { Outlet } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

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