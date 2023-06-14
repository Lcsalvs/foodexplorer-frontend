import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import MainLayout from "../MainLayout";

export default function AdminLayout({ Component }) {
  const { user } = useAuth();

  return user?.isAdmin ? (
    <MainLayout isAdmin Component={Component} />
  ) : (
    <Navigate to="/" />
  );
}
