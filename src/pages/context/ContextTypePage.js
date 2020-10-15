import React, { Component } from "react";
import { MyContext } from "./Context";

// contextType 组件
export default class ContextTypePage extends Component {
  //  React.createContext 创建的对象赋值给 MyContext
  static contextType = MyContext;

  render() {
    const text = this.context;
    return (
      <div className="border">
        <h3>{text}</h3>
      </div>
    );
  }
}
