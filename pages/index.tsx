import { Button, Card, Divider, Space, Table } from "antd";
import type { NextPage } from "next";
import { Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import type { Item } from "../constants";
import { dataState, dataLengthState } from "../recoil/data";
import Head from "../components/Head";
import TableButton from "../components/TableButton";

const { Title } = Typography;

const Home: NextPage = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "index",
      key: "index",
      render: (_text: any, _record: Item, index: any) => `${index + 1}`,
    },
    {
      title: "Cash Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Bank Name",
      dataIndex: "bank",
      key: "bank",
    },
    {
      title: "Account Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Cash Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_text: any, record: Item) => (
        <Space size={"small"} split={<Divider type="vertical" />}>
          <Button
            icon={<EditOutlined style={{ color: "yellowgreen" }} />}
            type="text"
            shape="circle"
            size="large"
          />
          <Button
            icon={<DeleteOutlined style={{ color: "red" }} />}
            type="text"
            shape="circle"
            size="large"
          />
        </Space>
      ),
    },
  ];

  const [data, setData] = useRecoilState(dataState);
  const info = useRecoilValue(dataLengthState);

  const showTotal = (total: number = info) => {
    return `Total ${total} items`;
  };

  return (
    <div>
      <Head title="Testing Next.JS" desc="This is just a test" />
      <TableButton isChild={false} isHome={true} />
      <Card>
        <div>
          <Title level={3}>Cash - Master</Title>
          <Table
            columns={columns}
            pagination={{
              showTotal,
            }}
            dataSource={data}
            scroll={{ x: true }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Home;
