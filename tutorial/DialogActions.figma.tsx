import React from "react";
import { DialogActions } from "../src/ui/Dialog/DialogActions";
import figma from "@figma/code-connect";

figma.connect(DialogActions, "<FIGMA_DIALOG_ACTIONS>", {
  props: { children: figma.children(["Button"]) },
  example: (props) => <DialogActions>{props.children}</DialogActions>,
});
