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

figma.connect(PrimaryButton, "<FIGMA_1_TO_M_BUTTON>", {
  variant: { Variant: "Primary" },
  props: sharedProps,
  example: ({ label, ...sharedProps }) => (
    <PrimaryButton onClick={() => {}} {...sharedProps}>
      {label}
    </PrimaryButton>
  ),
});

figma.connect(SecondaryButton, "<FIGMA_1_TO_M_BUTTON>", {
  variant: { Variant: "Secondary" },
  props: sharedProps,
  example: ({ label, ...sharedProps }) => (
    <SecondaryButton onClick={() => {}} {...sharedProps}>
      {label}
    </SecondaryButton>
  ),
});

figma.connect(InverseButton, "<FIGMA_1_TO_M_BUTTON>", {
  variant: { Variant: "Inverse" },
  props: sharedProps,
  example: ({ label, ...sharedProps }) => (
    <InverseButton onClick={() => {}} {...sharedProps}>
      {label}
    </InverseButton>
  ),
});
