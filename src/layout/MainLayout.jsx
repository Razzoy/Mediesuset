import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Newsletter } from "../components/Newsletter/Newsletter";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}
