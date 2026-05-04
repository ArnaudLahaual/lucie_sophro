import { Table } from "antd";
import type { TableProps } from "antd";

type Props<T> = {
  columns: TableProps<T>["columns"];
  dataSource: T[];
  loading?: boolean;
  rowKey: string;
  pagination?: boolean;
};

export default function TableData<T>({
  columns,
  dataSource,
  loading = false,
  rowKey,
  pagination = true,
}: Props<T>) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination}
    />
  );
}