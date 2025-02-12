import React from "react";
import { Dialog } from "../src/ui/Dialog/Dialog";
import figma from "@figma/code-connect";

figma.connect(Dialog, "<FIGMA_DIALOG>", {
  props: {
    children: figma.boolean("Actions", {
      true: figma.children(["Dialog Content", "Dialog Actions"]),
      false: figma.children(["Dialog Content"]),
    }),
  },
  example: (props) => <Dialog>{props.children}</Dialog>,
});
