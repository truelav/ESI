import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import useAuth from "../../../hooks/useAuth";
import Sidebar from "../../sidebar";

import "./styles.css";

export default function DashboardLayout() {
    const { isAdmin } = useAuth();

    if (isAdmin) {
        return (
            <div className="dashboard-wrapper">
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={10} className="dashboard-body-wrapper">
                        <Outlet />
                    </GridItem>
                </Grid>
            </div>
        );
    }
    return (
        <>
            <h2>Unauthorized</h2>
        </>
    );
}
