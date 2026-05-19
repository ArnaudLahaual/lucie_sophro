import { Table } from "antd";
import type { TableProps, TablePaginationConfig } from "antd";

type Props<T> = {
  columns: TableProps<T>["columns"];
  dataSource: T[];
  loading?: boolean;
  rowKey: string;
  pagination?: boolean | TablePaginationConfig;
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
      pagination={pagination ? {} : false}
      rowSelection={rowSelection}
    />
  );
}
