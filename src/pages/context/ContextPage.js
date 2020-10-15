import React, { Component } from "react";

import {MyContext} from "./Context";

import ContextTypePage from "./ContextTypePage";
import ConsumerPage from "./ConsumerPage";
import UseContextPage from "./UseContextPage";

// ContextPage 组件
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "red",
    };
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <MyContext.Provider value={text}>  {/* 使用 MyContext 的 Provider 对象将值传递给子组件*/}
          <ContextTypePage />
          <ConsumerPage />
          <UseContextPage />
        </MyContext.Provider>
      </div>
    );
  }
}

