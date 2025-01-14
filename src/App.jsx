import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { NoPage } from "./pages/NoPage";
import { LoginPage } from "./pages/LoginPage";
import { InfoPage } from "./pages/InfoPage";
import { TicketsPage } from "./pages/TicketsPage";
import { CampsPage } from "./pages/CampsPage";
import { ProgramPage } from "./pages/ProgramPage";
import { LineUpPage } from "./pages/LineUpPage";
import { NewsDetailsPage } from "./pages/NewsDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/lineup"} element={<LineUpPage />} />
            <Route path={"/program"} element={<ProgramPage />} />
            <Route path={"/camps"} element={<CampsPage />} />
            <Route path={"/tickets"} element={<TicketsPage />} />
            <Route path={"/info"} element={<InfoPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path="/news/:id" element={<NewsDetailsPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
