import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      // 使⽤setState⽅法更新状态
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // 组件卸载前停⽌定时器
    clearInterval(this.timerID);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
