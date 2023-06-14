import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import MainLayout from "../MainLayout";

export default function PublicLayout({ Component }) {
  const { user } = useAuth();

  return user?.isAdmin ? (
    <Navigate to="/admin" />
  ) : (
    <MainLayout Component={Component} />
  );
}
