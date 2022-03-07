import React from "react";
import Form from "../../components/Form";
import { FormHeaders } from "../../constants";
import TableButton from "../../components/TableButton";
import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
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
      <TableButton isChild={true} isHome={false} />
      <Form headers={headers} title={"Edit - Cash - Master"} value={id} />
    </div>
  );
};

export default Edit;
