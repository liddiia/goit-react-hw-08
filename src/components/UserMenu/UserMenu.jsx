import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";
import { selectUsersData } from "../../redux/auth/slice";
import { apiLogoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUsersData);
  const onLogout = () => {
    dispatch(apiLogoutUser()); // Виконання операції logout
  };
  return (
    <div className={css.userMenuCont}>
      <span> Hello, {userData.name}!</span>
      <button onClick={onLogout} type="button">
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default UserMenu;
