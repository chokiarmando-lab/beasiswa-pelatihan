import { Navigate } from "react-router-dom";


interface Props {
  children: React.ReactNode;
  allowedRoles?: string[];
}


export default function ProtectedRoute({
  children,
  allowedRoles
}: Props) {


  const token = localStorage.getItem("token");


  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );


  if (!token) {
    return <Navigate to="/login" />;
  }


  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {

    return <Navigate to="/dashboard" />;

  }


  return children;

}