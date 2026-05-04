import { Space } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosconfig";
import LoaderInline from "../../components/Loader/LoaderInline";
import "../../components/Loader/LoaderInline";
import TableData from "../../components/TableData/TableData";

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

  const columns: TableProps<Booking>["columns"] = [
    {
      title: "Prénom",
      dataIndex: "firstname",
      key: "firstname",
      filters: [...new Set(data.map((d) => d.firstname))].map((firstname) => ({
        text: firstname,
        value: firstname,
      })),
      onFilter: (value, record) => record.firstname === value,
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Nom",
      dataIndex: "lastname",
      key: "lastname",
      filters: [...new Set(data.map((d) => d.lastname))].map((lastname) => ({
        text: lastname,
        value: lastname,
      })),
      onFilter: (value, record) => record.lastname === value,
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      sortDirections: ["ascend", "descend"],
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
      filters: [
        { text: "Visio", value: "visio" },
        { text: "Présentiel", value: "presentiel" },
      ],
      onFilter: (value, record) => record.subject_place === value,
    },
    {
      title: "Séance",
      dataIndex: "subject",
      key: "subject",
      filters: [
        { text: "Adulte", value: "resa_adulte" },
        { text: "Enfant", value: "resa_enfant" },
      ],
      onFilter: (value, record) => record.subject === value,
    },
    {
      title: "Date",
      key: "date",
      render: (_, record) => record.time_slot?.date,
      filters: [...new Set(data.map((d) => d.time_slot.date))].map((date) => ({
        text: date,
        value: date,
      })),
      onFilter: (value, record) => record.time_slot?.date === value,
      sorter: (a, b) => a.time_slot.date.localeCompare(b.time_slot.date),
      sortDirections: ["ascend", "descend"],
      
    },
    {
      title: "Heure",
      key: "time",
      render: (_, record) => record.time_slot?.time,
      filters: [...new Set(data.map((d) => d.time_slot.time))].map((time) => ({
        text: time,
        value: time,
      })),
      onFilter: (value, record) => record.time_slot.time === value,
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

  return loading ? (
    <div className="slots-loader">
      <LoaderInline />
    </div>
  ) : (
    <div>
      <h2>Réservations</h2>
      <TableData
        dataSource={data}
        columns={columns}
        rowKey="id"
        loading={loading}
      />{" "}
    </div>
  );
}
