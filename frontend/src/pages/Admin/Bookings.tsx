import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

const data: Booking[] = [
  {
    id: 1,
    firstname: "Marie",
    lastname: "Dupont",
    email: "marie@test.com",
    phone: "0600000000",
    subject: "resa_adulte",
    time_slot_id: 1,
  },
];

type Booking = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  time_slot_id: number;
};

const columns: TableProps<Booking>["columns"] = [
  {
    title: "Prénom",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Nom",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Téléphone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Séance",
    dataIndex: "subject",
    key: "subject",
    render: (subject: string) => {
      const isAdulte = subject === "resa_adulte";

      return (
        <Tag color={isAdulte ? "gold" : "green"}>
          {isAdulte ? "Adulte" : "Enfant"}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space>
        <a>Modifier</a>
        <a style={{ color: "red" }}>Supprimer</a>
      </Space>
    ),
  },
];

export default function Bookings() {
  return (
    <div>
      <h2>Réservations</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}
