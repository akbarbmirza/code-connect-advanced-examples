import React from "react";
import { Button } from "../src/ui/Buttons/Button";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/A6FOwGsBIvChERegmtM2oH/Code-Connect-Tutorial-Advanced?node-id=22-360&m=dev",
  {
    props: {
      label: figma.string("Label"),
      iconEnd: figma.boolean("Icon End", {
        true: figma.instance("↳ Icon End Instance"),
        false: undefined,
      }),
      iconStart: figma.boolean("Icon Start", {
        true: figma.instance("↳ Icon Start Instance"),
        false: undefined,
      }),
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
      }),
    },
    example: ({ label, ...props }) => (
      <Button onClick={() => {}} {...props}>
        {label}
      </Button>
    ),
  }
);
