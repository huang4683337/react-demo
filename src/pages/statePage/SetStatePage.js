import React, { Component } from "react";

export default class SetStatePage extends Component {
  state = { cont: 0 };

  changeValue = (v) => {
    this.setState((state) => ({ cont: state.cont + v }));
  };

  /***** 同步 *****/
  // setCont = () => {
  //   setTimeout(() => {
  //     this.changeValue(1);
  //   }, 0);
  // };

  // 在 setState 回调中取值
  // changeValue = (v) => {
  //   this.setState({ cont: this.state.cont + v }, () => {
  //     console.log("cont", this.state.cont);
  //   });
  // };

  /***** 异步 *****/

  // 合成事件
  setCont = () => {
    this.changeValue(1);
    this.changeValue(2);
  };

  // 生命周期
  // componentDidMount() {
  //   this.changeValue(1);
  // }

  render() {
    const { cont } = this.state;
    return (
      <div>
        <p>SetStatePage</p>

        <button onClick={this.setCont}>按钮</button>
        <br />
        <br />

        {cont}
      </div>
    );
  }
}
