import React from "react";
import { Button, ButtonProps } from "tamagui";

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        fontWeight={600}
      />
    );
  }
);

ButtonComponent.displayName = "ButtonComponent";

export default ButtonComponent;
