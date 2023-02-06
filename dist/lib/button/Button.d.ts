import { ButtonProps as MUIButtonProps } from "@mui/material";
import type { PropsWithChildren } from "react";
export interface ButtonProps extends MUIButtonProps {
    loading?: boolean;
}
declare const Button: ({ loading, children, ...props }: PropsWithChildren<ButtonProps>) => JSX.Element;
export default Button;
