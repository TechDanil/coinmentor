import { useFormik, FormikProvider } from "formik";
import RegisterFormBody from "./registerFormBody/RegisterFormBody";
import RegisterFormHeader from "./registerFormHeader/RegisterFormHeader";
import { IInitialValuesRegister, initialValuesRegister } from "./initialValues";
import { RegisterValidationSchema } from "../../../shared/validations/auth.validate";
import { useActions } from "../../../hooks/useActions";

const RegisterForm = () => {
    const { register } = useActions();

    const formik = useFormik<IInitialValuesRegister>({
        initialValues: initialValuesRegister,
        validationSchema: RegisterValidationSchema,
        onSubmit: async (values: IInitialValuesRegister) => {
            register({ ...values });
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