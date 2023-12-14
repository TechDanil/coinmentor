import { memo } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { isAuthSelector } from "../../../../store/auth/auth.selectors";
import Button from "../../../ui/button/Button";

interface Props {
    isSubmitting: boolean;
}

const LoginFormFooter = memo(({ isSubmitting }: Props) => {
    const isAuth = useTypedSelector(isAuthSelector);

    console.log(isAuth);

    return (
        <Button type="submit" disabled={isSubmitting} className="btn btn-theme btn--icon">
           <i className="zwicon-checkmark"></i>
        </Button>
    );
});

export default LoginFormFooter;