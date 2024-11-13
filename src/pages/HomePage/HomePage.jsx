import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/slice";

const HomePage = () => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn);
  return (
    <div className={css.homePageCont}>
      <h1>Welcome to Phonebook!</h1>
      <p>Your personal contact manager, always at your fingertips.</p>
      <p>Why Phonebook?</p>
      <ul>
        <li>Secure and private storage of your contacts.</li>
        <li>Quick search and easy access to your contacts.</li>
        <li>Manage your contacts from anywhere, anytime.</li>
      </ul>
      {!isLoggedIn && (
        <Link to="/register" className={css.getStartedButton} aria-label="Get Started">
          Get Started
        </Link>
      )}
    </div>
  );
};

export default HomePage;
