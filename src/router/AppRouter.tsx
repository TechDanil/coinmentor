import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../components/screens/main/Main";
import { ADMIN_SCREEN, LOGIN_SCREEN, MAIN_SCREEN, REGISTER_SCREEN } from "../configs/screens.config";
import Login from "../components/screens/login/Login";
import Register from "../components/screens/register/Register";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${MAIN_SCREEN}`} element={<Navigate to={LOGIN_SCREEN} />} />
                <Route path={`${LOGIN_SCREEN}`} element={<Login />} />
                <Route path={`${REGISTER_SCREEN}`} element={<Register />} />
                <Route path={`${ADMIN_SCREEN}`} element={<Layout />} 
                >
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;