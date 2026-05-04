import { Table } from "antd";
import type { TableProps } from "antd";

type Props<T> = {
  columns: TableProps<T>["columns"];
  dataSource: T[];
  loading?: boolean;
  rowKey: string;
  pagination?: boolean;
  rowSelection?: TableProps<T>["rowSelection"];
};

export default function TableData<T>({
  columns,
  dataSource,
  loading = false,
  rowKey,
  pagination = true,
  rowSelection,
}: Props<T>) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination}
      rowSelection={rowSelection}
    />
  );
}
