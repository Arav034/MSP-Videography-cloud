import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBookButton from "@/components/common/FloatingBookButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-frost">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
}