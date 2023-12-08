import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isAuthSelector, isVerifiedSelector } from "../../store/auth/auth.selectors";
import { MAIN_SCREEN } from "../../configs/screens.config";

const AuthenticatedUser = () => {
    const isVerified = useTypedSelector(isVerifiedSelector);
    const isAuth  = useTypedSelector(isAuthSelector);
    console.log(isAuth);
    console.log(isVerified);

    const { state } = useLocation() ;

    if (!isVerified) return null;

    if (isAuth) {
        return (
            <Navigate to={state?.from || MAIN_SCREEN} replace={true} />
        );
    }
    
    return <Outlet />;
}

export default AuthenticatedUser;