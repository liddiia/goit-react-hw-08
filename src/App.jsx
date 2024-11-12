import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCurrentUser } from "./redux/auth/operations";
import { selectUsersDataIsRefreshing } from "./redux/auth/slice";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
// const MovieReviews = lazy(() =>
//const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(apiGetCurrentUser());
    },[dispatch]);
const isRefreshing = useSelector(selectUsersDataIsRefreshing);
 if(isRefreshing) {return <div><Loader /></div>}
  return (
    <>
      <Header />
       <Suspense fallback={<Loader />}>  
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/register" element={<RestrictedRoute element={<RegistrationPage />}/>} />
          <Route path="/login" element={<RestrictedRoute element={<LoginPage />}/>}/>
          <Route
            path="/contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
            
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
       </Suspense> 
    </>
  );
};

export default App;
