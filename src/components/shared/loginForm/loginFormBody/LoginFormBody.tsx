import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import LoginFormFooter from "../loginFormFooter/LoginFormFooter";
import { IInitialValuesLogin } from "../initialValues";

interface Props {
    values: IInitialValuesLogin;
    errors: FormikErrors<IInitialValuesLogin>;
    touched: FormikTouched<IInitialValuesLogin>;
    isSubmitting: boolean;
}

const LoginFormBody = ({  
    values,
    errors,
    touched,
    isSubmitting,
}: Props) => {
    return (
        <div className="login__block__body">
            <div className="form-group form-group--centered">
                <Field
                    id="email"
                    value={values.email}
                    type="text"
                    name="email"
                    className={`form-control text-center${touched?.email && errors?.email ? " is-invalid" : ""}`}
                    placeholder="Email Address"
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group form-group--centered">
                <Field
                    id="password"
                    value={values.password}
                    type="password"
                    name="password"
                    className={`form-control text-center${touched?.password && errors?.password ? " is-invalid" : ""}`}
                    placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <LoginFormFooter isSubmitting={isSubmitting} />
        </div>
    );
}

export default LoginFormBody;