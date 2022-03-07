import React from "react";
import Head from "../../components/Head";

const index = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Head />
      <iframe
        frameBorder="0"
        style={{ overflow: "hidden", minHeight: "70vh", width: "100%" }}
        height="100%"
        width="100%"
        src="https://next-redux-tutorial.vercel.app/todos"
      />
    </div>
  );
};

export default index;
