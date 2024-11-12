
import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
// const MovieReviews = lazy(() =>
//const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />}/>
           <Route path="/contacts" element={<ContactsPage />} />
             
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
