import React, { Component } from "react";
import { MyContext } from "./Context";

// ConsumerPage 组件
export default class ConsumerPage extends Component {
  render() {
    return (
      <div className="border">
        <MyContext>
          {/* text 是其他组件通过 MyContext 传来的参数 */}
          {/* 需要通过函数式去使用 */}
          {(text) => <h1>{text}</h1>}
        </MyContext>
      </div>
    );
  }
}
