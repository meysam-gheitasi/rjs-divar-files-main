import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import NotfoundPage from "pages/404";
import DashboardPage from "pages/DashboardPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";

function Router() {
    const { data, isLoading, error } = useQuery(["profile"], getProfile)
    console.log(data, isLoading, error)

    if (isLoading) return <h1>Loading...</h1>
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage />} />
            <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />} />
            <Route path="/dashboard" element={data ? <DashboardPage /> : <Navigate to="/auth" />} />
            <Route path="*" element={<NotfoundPage />} />
        </Routes>
    )
}

export default Router