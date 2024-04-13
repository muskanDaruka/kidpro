import AdminMenu from "../../components/AdminMenu";
import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-row">
                <div className="h-screen w-[300px] lg:block hidden overflow-y-auto sticky left-0 top-0 h-screen">
                    <AdminMenu />
                </div>
                <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
