import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useLocation } from "react-router-dom";

function RequiredAuth({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    }
    return children;
}
export default RequiredAuth;