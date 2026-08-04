import { useState } from "react";
import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import SplashScreen from "@/components/common/SplashScreen";

export default function App() {
  // const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <ScrollToTop />
      <AppRoutes />
      <ScrollToTopButton /> */}
      <AppRoutes />
    </>
  );
}