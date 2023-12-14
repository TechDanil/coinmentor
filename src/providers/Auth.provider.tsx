import { ReactNode, useEffect } from "react";
import { useActions } from "../hooks/useActions";

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const { verify } = useActions();

    useEffect(() => {
        verify();
    }, []);

    return <>{children}</>;
}

export default AuthProvider;