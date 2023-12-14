import { FormikProvider, useFormik } from "formik";
import LoginFormBody from "./loginFormBody/LoginFormBody";
import LoginFormHeader from "./loginFormHeader/LoginFormHeader";
import { IInitialValuesLogin, initialValuesLogin } from "./initialValues";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router-dom";
import { ADMIN_SCREEN } from "../../../configs/screens.config";
import { LoginValidationSchema } from "../../../shared/validations/auth.validate";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { isAuthSelector } from "../../../store/auth/auth.selectors";
import { useEffect } from "react";

const LoginForm = () => {
    const { login } = useActions();
    const navigate = useNavigate();
    const isAuth = useTypedSelector(isAuthSelector);


    const formik = useFormik<IInitialValuesLogin>({
        initialValues: initialValuesLogin,
        validationSchema: LoginValidationSchema,
        onSubmit: async (values: IInitialValuesLogin) => {
            try {
                await login(values);
                
            } catch (error) {
                console.error('Error during login:', error);
            }
        }
    });

    useEffect(() => {
        if (isAuth) {
            navigate(ADMIN_SCREEN);
        }
    }, [isAuth, navigate]);

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="login">
                <div className="login__block active" id="l-login">
                    <LoginFormHeader />
                    <LoginFormBody
                        values={formik.values}
                        errors={formik.errors}
                        touched={formik.touched}
                        isSubmitting={formik.isSubmitting}
                    />
                </div>
            </form>
        </FormikProvider> 
    );
}

export default LoginForm;