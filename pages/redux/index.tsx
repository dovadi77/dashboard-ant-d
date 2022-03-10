import React from "react";
import { useRecoilValue } from "recoil";
import { pageViewState } from "../../recoil/data";
import Counter from "./counter";
import Todos from "./todos";

const index = () => {
  const pageView = useRecoilValue(pageViewState);
  if (pageView.page === "redux.todos") return <Todos />;
  else if (pageView.page === "redux.counter") return <Counter />;
  return <></>;
};

export default index;
