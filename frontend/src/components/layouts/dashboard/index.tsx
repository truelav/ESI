import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrapper">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
