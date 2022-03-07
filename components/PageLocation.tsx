import React from "react";
import { Breadcrumb } from "antd";

const PageLocation = ({ list = ["Test", "Child"] }: { list: string[] }) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {list.map((item, i) => {
        return <Breadcrumb.Item key={i}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default PageLocation;
