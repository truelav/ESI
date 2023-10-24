import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Card } from "@shopify/polaris";

import "./styles.css";

import Sidebar from "../../sidebar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrapper">
      <main>
        <Container>
          <div className="dashboard-outer-container">
            <div className="dashboard-inner-container grid-1">
              <Card>
                <Sidebar />
              </Card>
            </div>
            <div className="dashboard-inner-container grid-4">
              <Card>
                <Outlet />
              </Card>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
