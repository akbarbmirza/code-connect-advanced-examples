import { PrimaryButton } from "../src/ui/Buttons/vanity-components/PrimaryButton";
import { SecondaryButton } from "../src/ui/Buttons/vanity-components/SecondaryButton";
import { InverseButton } from "../src/ui/Buttons/vanity-components/InverseButton";
import figma from "@figma/code-connect";
import React from "react";

/* One component in Figma to many components in code */

const sharedProps = {
  label: figma.string("Label"),
  iconEnd: figma.boolean("Icon End", {
    true: figma.instance("↳ Icon End Instance"),
    false: undefined,
  }),
  iconStart: figma.boolean("Icon Start", {
    true: figma.instance("↳ Icon Start Instance"),
    false: undefined,
  }),
  disabled: figma.enum("* State", {
    Disabled: true,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
};

figma.connect(
  PrimaryButton,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=27-969",
  {
    variant: { Variant: "Primary" },
    props: sharedProps,
    example: ({ label, ...sharedProps }) => (
      <PrimaryButton onClick={() => {}} {...sharedProps}>
        {label}
      </PrimaryButton>
    ),
  }
);
