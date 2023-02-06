import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import type { PropsWithChildren } from "react";

export interface ButtonProps extends MUIButtonProps {
  loading?: boolean;
}

const Button = ({
  loading = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <MUIButton variant="contained" {...props}>
      {loading ? "..." : children}
    </MUIButton>
  );
};

export default Button;
