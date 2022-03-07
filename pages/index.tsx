import { Button, Card, Divider, Popconfirm, Space, Table } from "antd";
import type { NextPage } from "next";
import { Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
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
          <Link href="/[id]" as={`/${record.id}`}>
            <Button
              icon={<EditOutlined style={{ color: "yellowgreen" }} />}
              type="text"
              shape="circle"
              size="large"
            />
          </Link>
          <Popconfirm
            title="Are you sure to delete this item?"
            onConfirm={() => deleteData(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined style={{ color: "red" }} />}
              type="text"
              shape="circle"
              size="large"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [data, setData] = useRecoilState(dataState);
  const info = useRecoilValue(dataLengthState);

  const showTotal = (total: number = info) => {
    return `Total ${total} items`;
  };

  const deleteData = (itemID: any) => {
    let index = data.findIndex((x) => x.id === parseInt(itemID));
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(newData);
  };

  return (
    <div>
      <Head />
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
