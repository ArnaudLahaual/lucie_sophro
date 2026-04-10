import { Spin } from "antd";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <Spin size="large" />
    </div>
  );
}
