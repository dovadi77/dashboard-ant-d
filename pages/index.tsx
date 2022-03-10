import React from "react";
import { useRecoilValue } from "recoil";
import { pageViewState } from "../recoil/data";
import Add from "./add";
import Edit from "./edit";
import Home from "./home";

const index = () => {
  const pageView = useRecoilValue(pageViewState);
  if (pageView.page === "index") return <Home />;
  else if (pageView.page === "index.add") return <Add />;
  else if (pageView.page === "index.edit") return <Edit />;
  return <></>;
};

export default index;
