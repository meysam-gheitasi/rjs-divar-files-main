import { Route, Routes } from "react-router-dom";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import NotfoundPage from "pages/404";
import DashboardPage from "pages/DashboardPage";

function Router() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotfoundPage />} />
        </Routes>
    )
}

export default Router