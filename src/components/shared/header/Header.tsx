import { ReactNode } from "react";

interface IHeader {
    className: string
    children: ReactNode;
}

const Header = ({className, children }: IHeader) => {
    return (
        <header className={`${className}`}>
            {children}
        </header>
    )
}

export default Header;