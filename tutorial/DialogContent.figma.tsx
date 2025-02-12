import React from "react";
import { DialogContent } from "../src/ui/Dialog/DialogContent";
import figma from "@figma/code-connect";

figma.connect(
  DialogContent,
  "https://www.figma.com/file/A6FOwGsBIvChERegmtM2oH/Code-Connect-Tutorial-Advanced?node-id=45%3A1668&mode=dev",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);
