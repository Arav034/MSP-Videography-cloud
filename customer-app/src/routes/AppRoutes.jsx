import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import PageLoader from "@/components/common/PageLoader";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const ServicesPage = lazy(() => import("@/pages/services"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Login = lazy(() => import("@/pages/Login"));
const ServiceRequest = lazy(() => import("@/pages/ServiceRequest"));
const Book = lazy(() => import("@/pages/Book"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const DashboardHome = lazy(() => import("@/pages/dashboard/DashboardHome"));
const Bookings = lazy(() => import("@/pages/dashboard/Bookings"));
const Galleries = lazy(() => import("@/pages/dashboard/Galleries"));
const Invoices = lazy(() => import("@/pages/dashboard/Invoices"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const MyRequests = lazy(() => import("@/pages/dashboard/MyRequests"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.FAQ} element={<FAQ />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SERVICE_REQUEST} element={<ServiceRequest />} />
          <Route path={ROUTES.BOOK} element={<Book />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardHome />} />
          <Route path={ROUTES.DASHBOARD_BOOKINGS} element={<Bookings />} />
          <Route path={ROUTES.DASHBOARD_GALLERIES} element={<Galleries />} />
          <Route path={ROUTES.DASHBOARD_INVOICES} element={<Invoices />} />
          <Route path={ROUTES.DASHBOARD_PROFILE} element={<Profile />} />
          <Route path={ROUTES.DASHBOARD_REQUESTS} element={<MyRequests />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}