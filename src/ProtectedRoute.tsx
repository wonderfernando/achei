import { Outlet, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import { useUserContext } from "./hooks/UserContext";

export default function ProtectedRoutes() {
  const { user, loading } = useUserContext();
  console.log(user);
  console.log(loading);
  if (loading) return <Loading />;
  if (!user) return <Navigate to="/entrar" />;
  return <Outlet />;
}
