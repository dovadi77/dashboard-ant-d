import {
  Button,
  Card,
  Col,
  Radio,
  Row,
  Space,
  Select,
  Input,
  Form as FormData,
  notification,
} from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FormHeaders, FormValues } from "../constants";
import { dataState, specifiedDataState } from "../recoil/data";

const { Option } = Select;

type Form = {
  headers: FormHeaders;
  value?: any;
  title: string;
};

const Form = ({ headers, value, title }: Form) => {
  const [data, setData] = useRecoilState(dataState);
  const [detailData, setDetailData] = useRecoilState(
    specifiedDataState(parseInt(value))
  );

  const finish = (res: any) => {
    if (!value) {
      const genID = Math.floor(Math.random() * 1000000);
      let resData = {
        ...res,
        id: genID,
        key: genID.toString(),
      };
      setData([...data, resData]);
      notification.open({
        message: "Success ✔",
        description: "Data has been added.",
      });
    } else {
      setDetailData(res);
      notification.open({
        message: "Success ✔",
        description: "Data has been updated.",
      });
    }
  };

  const form = () => {
    return headers.map((header, index) => {
      if (header.type === "radio") {
        return (
          <Col span={24} key={index}>
            <FormData.Item
              name={header.key}
              label={header.title}
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  {header.multipleChoice?.map((choice, i) => {
                    return (
                      <Radio key={i} value={choice}>
                        {choice.toUpperCase()}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </FormData.Item>
          </Col>
        );
      } else if (header.type === "dropdown") {
        return (
          <Col span={12} key={index}>
            <FormData.Item
              name={header.key}
              label={header.title}
              rules={[{ required: true }]}
            >
              <Select>
                {header.multipleChoice?.map((choice, i) => {
                  return (
                    <Option key={i} value={choice}>
                      {choice.toUpperCase()}
                    </Option>
                  );
                })}
              </Select>
            </FormData.Item>
          </Col>
        );
      } else {
        return (
          <Col span={12} key={index}>
            <FormData.Item
              name={header.key}
              label={header.title}
              rules={[{ required: true }]}
            >
              <Input type={header.type} />
            </FormData.Item>
          </Col>
        );
      }
    });
  };

  return (
    <Card
      title={title}
      extra={
        <Button
          icon={value ? <EditOutlined /> : <PlusCircleOutlined />}
          type="primary"
          block
          size="large"
          form="formData"
          key="submit"
          htmlType="submit"
        >
          {value ? "EDIT" : "ADD"}
        </Button>
      }
    >
      <Card>
        <FormData
          id="formData"
          layout="vertical"
          onFinish={finish}
          initialValues={detailData ?? {}}
        >
          <Row gutter={24}>{form()}</Row>
        </FormData>
      </Card>
    </Card>
  );
};

export default Form;
