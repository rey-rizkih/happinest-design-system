import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import type { PropsWithChildren } from "react";

export interface HappinestButtonProps extends MUIButtonProps {
  loading?: boolean;
}

const HappinestButton = ({
  loading = false,
  children,
  ...props
}: PropsWithChildren<HappinestButtonProps>) => {
  return (
    <MUIButton variant="contained" {...props}>
      {loading ? "..." : children}
    </MUIButton>
  );
};

export default HappinestButton;
