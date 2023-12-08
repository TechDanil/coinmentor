import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MAIN_SCREEN, REGISTER_SCREEN } from "../configs/screens.config";
import Main from "../components/screens/main/Main";
import AuthenticatedUser from "./helpers/AuthenticatedUser.route";
import Register from "../components/screens/register/Register";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { isAuthSelector } from "../store/auth/auth.selectors";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  const isAuth = useTypedSelector(isAuthSelector);

  console.log(isAuth)

  return (
    <Router>
      <Routes>
        <Route
          path={`${MAIN_SCREEN}`}
          element={isAuth ? <AuthenticatedUser /> : <Navigate to="/register" />}
        >
          <Route path="main" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Route>
        <Route path={`${REGISTER_SCREEN}`} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;