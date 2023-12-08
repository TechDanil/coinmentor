import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button = ({ children, className, disabled, ...rest }: Props) => {
  return (
    <button
        {...rest}
        className="btn btn-theme"
    >
        {children}
    </button>
  )
}

export default Button;