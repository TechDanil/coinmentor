import { Link } from "react-router-dom";
import Button from "../../../ui/button/Button";

interface Props {
    isSubmitting: boolean;
}

const RegisterFormFooter = ({ isSubmitting }: Props) => {
    return (
        <Button disabled={isSubmitting} className="btn btn-theme btn--icon">
            <Link to="#">
                <i className="zwicon-checkmark"></i>
            </Link>
        </Button>
    );
}

export default RegisterFormFooter;