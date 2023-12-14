import { memo } from "react";
import Button from "../../../ui/button/Button";

interface Props {
    isSubmitting: boolean;
}

const RegisterFormFooter = memo(({ isSubmitting }: Props) => {

    return (
        <Button type="submit" disabled={isSubmitting} className="btn btn-theme btn--icon">
           <i className="zwicon-checkmark"></i>
        </Button>
    );
});

export default RegisterFormFooter;