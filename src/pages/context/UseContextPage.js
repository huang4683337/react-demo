import React, { useContext } from "react";
import { MyContext } from "./Context";

// UseContextPage 组件

// hook函数只能用在函数组件或者自定义hook
export default function UseContextPage(props) {
  const text = useContext(MyContext);

  return (
    <div className="border">
      <p>{text}</p>
    </div>
  );
}
