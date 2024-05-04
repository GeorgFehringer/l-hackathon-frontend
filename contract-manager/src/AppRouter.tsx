import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LegalContracts from "./pages/LegalContracts";
import FinanceContracts from "./pages/FinanceContracts";
import TestPage from "./pages/TestPage";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/legal_contracts" element={<LegalContracts />} />
      <Route path="finance_contracts" element={<FinanceContracts />} />
    </Routes>
  );
}

export default AppRouter;
