import React from "react";
import Form from "../components/Form";
import { FormHeaders } from "../constants";
import TableButton from "../components/TableButton";
import { useRouter } from "next/router";
import Head from "../components/Head";
import { useRecoilValue } from "recoil";
import { pageViewState } from "../recoil/data";

const Edit = () => {
  const pageView = useRecoilValue(pageViewState);
  const headers: FormHeaders = [
    {
      title: "Cash Name",
      key: "name",
      type: "text",
    },
    {
      title: "Bank",
      key: "bank",
      type: "dropdown",
      multipleChoice: ["BANK ABC", "BANK CBA", "BANK ASD"],
    },
    {
      title: "Account Owner",
      key: "owner",
      type: "text",
    },
    {
      title: "Cash Type",
      key: "type",
      type: "radio",
      multipleChoice: ["CASH", "E-WALLET", "BANK TRANSFER"],
    },
  ];
  return (
    <div>
      <Head />
      <TableButton isChild={true} isHome={false} />
      <Form
        headers={headers}
        title={"Edit - Cash - Master"}
        value={pageView.param.id ?? 1}
      />
    </div>
  );
};

export default Edit;
