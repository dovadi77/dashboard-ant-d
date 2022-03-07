import React from "react";
import Form from "../components/Form";
import { FormHeaders } from "../constants";
import TableButton from "../components/TableButton";
import Head from "../components/Head";

const Add = () => {
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
      <Form headers={headers} title={"Create - Cash - Master"} />
    </div>
  );
};

export default Add;
