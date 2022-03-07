import { Button, Space, Row, Col } from "antd";
import {
  DownloadOutlined,
  PlusCircleOutlined,
  PrinterOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

type TableButton = {
  isHome: boolean;
  isChild: boolean;
  addLink?: string;
};

const TableButton = ({ isHome, isChild, addLink }: TableButton) => {
  const router = useRouter();
  return (
    <Row style={{ margin: "0 0 1em 0" }}>
      <Col flex={3}>
        <Space size={"small"}>
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            size="large"
            className="btn-success"
            disabled={!isHome}
            onClick={() => router.push(addLink ?? "/add")}
          >
            Add
          </Button>
          <Button
            icon={<PrinterOutlined />}
            type="primary"
            size="large"
            disabled={!isHome}
          >
            Print
          </Button>
          <Button
            icon={<DownloadOutlined />}
            type="primary"
            size="large"
            disabled={!isHome}
          >
            Download
          </Button>
        </Space>
      </Col>
      <Col flex={1} style={{ textAlign: "right" }}>
        <Button
          icon={<RollbackOutlined />}
          type="primary"
          size="large"
          className="btn-dark"
          disabled={!isChild}
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Col>
    </Row>
  );
};

export default TableButton;
