import { importShared } from "./__federation_fn_import.js";
import { j as jsxRuntimeExports } from "./jsx-runtime.js";
const { Modal } = await importShared("antd");
const openConfirmModal = (props) => {
  Modal.confirm({
    title: props.title,
    content: props.text,
    onOk: async () => {
      await fetch(props.confirmUrl, {
        method: "POST",
        body: JSON.stringify(props.confirmData),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    footer: (_, { OkBtn, CancelBtn }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CancelBtn, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OkBtn, {})
    ] })
  });
};
export {
  openConfirmModal
};
