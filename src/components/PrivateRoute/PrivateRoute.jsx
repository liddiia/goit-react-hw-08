import { useSelector } from "react-redux";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn); 
  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
