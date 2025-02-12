import React from "react";
import { IconButton } from "../src/ui/Buttons/IconButton";
import figma from "@figma/code-connect";

figma.connect(IconButton, "<FIGMA_ICON_BUTTON", {
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
});
