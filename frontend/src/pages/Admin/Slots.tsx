import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export default function Slots() {
  return (
    <div>
      <h2>Bloquer une date :</h2>
      <Space direction="vertical" size={12}>
        <RangePicker />
      </Space>
    </div>
  );
}
