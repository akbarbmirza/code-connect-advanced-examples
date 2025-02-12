import React from "react";
import { Dialog } from "../src/ui/Dialog/Dialog";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/file/A6FOwGsBIvChERegmtM2oH/Code-Connect-Tutorial-Advanced?node-id=45%3A1366&mode=dev",
  {
    props: {
      children: figma.boolean("Actions"),
    },
    example: (props) => <Dialog>{props.children}</Dialog>,
  }
);
