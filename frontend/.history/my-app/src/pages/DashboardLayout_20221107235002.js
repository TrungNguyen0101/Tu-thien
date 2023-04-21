import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))

    return (
        <div className="flex">
            <SidebarMenu props={user}></SidebarMenu>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;