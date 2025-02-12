import React from "react";
import { Button } from "../src/ui/Buttons/Button";
import figma from "@figma/code-connect";

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

// Primary Button Component
figma.connect(Button, "<FIGMA_M_TO_1_PRIMARY_BUTTON>", {
  props: sharedProps,
  example: ({ label, ...props }) => (
    <Button variant="primary" onClick={() => {}} {...props}>
      {label}
    </Button>
  ),
});

// Secondary Button Component
figma.connect(Button, "<FIGMA_M_TO_1_SECONDARY_BUTTON>", {
  props: sharedProps,
  example: ({ label, ...props }) => (
    <Button variant="secondary" onClick={() => {}} {...props}>
      {label}
    </Button>
  ),
});

// Inverse Button Component
figma.connect(Button, "<FIGMA_M_TO_1_INVERSE_BUTTON>", {
  props: sharedProps,
  example: ({ label, ...props }) => (
    <Button variant="inverse" onClick={() => {}} {...props}>
      {label}
    </Button>
  ),
});
