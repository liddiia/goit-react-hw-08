import { useSelector } from "react-redux";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn); 
  return isLoggedIn ?  <Navigate to={redirectTo} replace /> : element ;
};

export default RestrictedRoute;