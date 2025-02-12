import React from "react";
import { DialogActions } from "../src/ui/Dialog/DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/file/A6FOwGsBIvChERegmtM2oH/Code-Connect-Tutorial-Advanced?type=design&node-id=45-1561",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);
