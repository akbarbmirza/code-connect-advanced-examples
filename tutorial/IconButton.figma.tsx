import React from "react";
import { IconButton } from "../src/ui/Buttons/IconButton";
import figma from "@figma/code-connect";

figma.connect(
  IconButton,
  "https://www.figma.com/design/A6FOwGsBIvChERegmtM2oH/Code-Connect-Tutorial-Advanced?node-id=22-518&t=VOdBJ0uw2W2u8Oo2-0",
  {
    props: {
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      icon: figma.instance("Icon"),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
    },
    example: ({ icon, variant }) => (
      <IconButton
        ariaLabel="Describe the action here."
        variant={variant}
        icon={icon}
        onClick={() => {}}
      />
    ),
  }
);
