import React, { Component } from "react";
import Layout from "./Layout";
// 类似于 vue 具名插槽
export default class SlotName extends Component {
  render() {
    return (
      <Layout showTopBar={true} showBottomBar={true} title="SlotName">
        {{
          content: <div>SlotName</div>,
          txt: "这是一个文本",
          btnClick: () => {
            console.log("btnClick");
          },
        }}
      </Layout>
    );
  }
}
