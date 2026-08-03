import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/context/SidebarContext";
import Sidebar from "@/components/layout/SidebarTemp";
import DashboardTopbar from "@/components/layout/DashboardTopbar";
import SEO from "@/components/common/SEO";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <SEO title="Dashboard" noindex />
      <div className="flex min-h-screen bg-frost">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardTopbar />
          <main className="flex-1 px-6 md:px-10 py-10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}