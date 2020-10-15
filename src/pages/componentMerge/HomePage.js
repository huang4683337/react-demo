import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="HomePage">
        <div>HomePage</div>
      </Layout>
    );
  }
}
