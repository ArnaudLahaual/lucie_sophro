import { Spin } from "antd";

export default function LoaderInline() {
  return (
    <div className="loader-inline">
      <Spin style={{ color: "#b89878" }} size="default" />
    </div>
  );
}
