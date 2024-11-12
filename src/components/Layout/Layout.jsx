//  Створіть компонент Layout, який буде рендерити компонент
//  AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUsersData,
  selectUsersDataIsLoggedIn,
} from "../../redux/auth/slice";
import { apiLogoutUser } from "../../redux/auth/operations";

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn);
  const userData = useSelector(selectUsersData);
  
  const onLogout = () => {
    dispatch(apiLogoutUser()); // Виконання операції logout
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <nav>
          <div className={css.nav}>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? css.active : css.link
                }
              >
                Home
              </NavLink>
              {isLoggedIn &&
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Contacts
                </NavLink>
}
            </div>

            {isLoggedIn ? (
              <div>
                <span> Hello, {userData.name}!</span>
                <button onClick={onLogout} type="button"> Logout </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Registration
                </NavLink>

                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Log in
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
