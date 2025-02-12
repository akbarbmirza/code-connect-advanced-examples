import React from "react";
import { DialogContent } from "../src/ui/Dialog/DialogContent";
import figma from "@figma/code-connect";

figma.connect(DialogContent, "<FIGMA_DIALOG_CONTENT>", {
  props: {
    headline: figma.string("Headline"),
    content: figma.string("Content"),
  },
  example: ({ headline, content }) => (
    <DialogContent headline={<h2>{headline}</h2>} content={<p>{content}</p>} />
  ),
});
