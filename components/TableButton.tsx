import { Button, Space, Row, Col } from "antd";
import {
  DownloadOutlined,
  PlusCircleOutlined,
  PrinterOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { pageViewState } from "../recoil/data";

type TableButton = {
  isHome: boolean;
  isChild: boolean;
  addLink?: string;
};

const TableButton = ({ isHome, isChild, addLink }: TableButton) => {
  const router = useRouter();
  const setPageView = useSetRecoilState(pageViewState);
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
            onClick={() => setPageView({ page: "index.add" })}
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
          onClick={() => setPageView({ page: "index" })}
        >
          Back
        </Button>
      </Col>
    </Row>
  );
};

export default TableButton;
