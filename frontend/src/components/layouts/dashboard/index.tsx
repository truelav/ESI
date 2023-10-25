import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./styles.css";

import Sidebar from "../../sidebar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrapper">
      <main>
        <Container>
          <div className="dashboard-outer-container">
            <div className="dashboard-inner-container grid-1">
                <Sidebar />
            </div>
            <div className="dashboard-inner-container grid-4">
                <Outlet />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
