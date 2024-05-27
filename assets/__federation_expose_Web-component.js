import { importShared } from "./__federation_fn_import.js";
import { j as jsxRuntimeExports } from "./jsx-runtime.js";
import { c as createRoot, B as Button } from "./Button.js";
const { StyleSheetManager } = await importShared("styled-components");
class ButtonWebComponents extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const styleSlot = document.createElement("section");
    shadow.appendChild(styleSlot);
    const mountPoint = document.createElement("div");
    styleSlot.appendChild(mountPoint);
    const name = this.getAttribute("name") || "ButtonWebComponents";
    const root = createRoot(mountPoint);
    root.render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(StyleSheetManager, { target: styleSlot, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => {
            alert("clicked");
          },
          children: name
        }
      ) })
    );
  }
}
customElements.define("button-web-component", ButtonWebComponents);
