import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import License from "../../../ui/license/License";
import { IInitialValuesRegister } from "../initialValues";
import RegisterFormFooter from "../registerFormFooter/RegisterFormFooter";

interface Props {
    values: IInitialValuesRegister;
    errors: FormikErrors<IInitialValuesRegister>;
    touched: FormikTouched<IInitialValuesRegister>;
    isSubmitting: boolean;
}

const RegisterFormBody = ({
    errors,
    touched,
    isSubmitting,
    values
}: Props) => {
    return (
        <div className="login__block__body">
            <div className="form-group">
                <Field
                    values={values.username}
                    type="text"
                    name="username"
                    className={`form-control text-center${touched?.username && errors?.username ? " is-invalid" : ""}`}
                    placeholder="Name"
                />
                <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group form-group--centered">
                <Field
                    values={values.email}
                    type="text"
                    name="email"
                    className={`form-control text-center${touched?.email && errors?.email ? " is-invalid" : ""}`}
                    placeholder="Email Address"
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group form-group--centered">
                <Field
                    values={values.password}
                    type="password"
                    name="password"
                    className={`form-control text-center${touched?.password && errors?.password ? " is-invalid" : ""}`}
                    placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <License />
            <RegisterFormFooter isSubmitting={isSubmitting} />
        </div>
    );
}

export default RegisterFormBody;