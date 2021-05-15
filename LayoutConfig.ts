import { LayoutConfig } from "golden-layout";

export var layoutConfig: LayoutConfig = {
  root: {
    type: "row",
    content: [
      {
        type: "component",
        componentType: "Test"
      },
      {
        type: "component",
        componentType: "Test 2"
      }
    ]
  }
};
