import { r as reactDomExports } from "./index-2c0iKOci.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CpEPH1zh.js";
import { importShared } from "./__federation_fn_import-DOZPutyD.js";
var client = {};
var createRoot;
var m = reactDomExports;
{
  createRoot = client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const styled = await importShared("styled-components");
const Button$1 = styled.button`
    width: fit-content;
    height: 50px;
    background-color: aquamarine;
    outline: none;
    color:black;

    &:hover {
        background-color: blue;
    }
`;
const Button = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { onClick: props.onClick, children: props.children });
};
export {
  Button as B,
  client as a,
  createRoot as c
};
