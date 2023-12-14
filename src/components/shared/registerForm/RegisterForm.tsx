import { useFormik, FormikProvider } from "formik";
import RegisterFormBody from "./registerFormBody/RegisterFormBody";
import RegisterFormHeader from "./registerFormHeader/RegisterFormHeader";
import { IInitialValuesRegister, initialValuesRegister } from "./initialValues";
import { RegisterValidationSchema } from "../../../shared/validations/auth.validate";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router-dom";
import { ADMIN_SCREEN } from "../../../configs/screens.config";

const RegisterForm = () => {
    const { register } = useActions();
    const navigate = useNavigate();

    const formik = useFormik<IInitialValuesRegister>({
        initialValues: initialValuesRegister,
        validationSchema: RegisterValidationSchema,
        onSubmit: async (values: IInitialValuesRegister) => {
            if (values.isLicenseAccepted) {
                register({ ...values });
                navigate(ADMIN_SCREEN);
            } else {
                formik.setFieldError('isLicenseAccepted', 'Accept license, try again!');
            }
        }
    });

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="login">
                <div className="login__block active" id="l-register">
                    <RegisterFormHeader />
                    <RegisterFormBody
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

export default RegisterForm;