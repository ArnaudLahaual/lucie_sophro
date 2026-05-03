import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosconfig";
import LoaderInline from "../../components/Loader/LoaderInline";
import "../../components/Loader/LoaderInline";

type Booking = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  subject_place: string;
  time_slot: {
    date: string;
    time: string;
  };
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
    title: "Lieu",
    dataIndex: "subject_place",
    key: "subject_place",
  },
  {
    title: "Séance",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Date",
    key: "date",
    render: (_, record) => record.time_slot?.date,
  },
  {
    title: "Heure",
    key: "time",
    render: (_, record) => record.time_slot?.time,
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
  const [data, setData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get(`/bookings`)
      .then((resp: { data: Booking[] }) => {
        console.log(resp.data);
        setData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("erreur lors de la récupération des bookings :", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div className="slots-loader">
      <LoaderInline />
    </div>
  ) : (
    <div>
      <h2>Réservations</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}
