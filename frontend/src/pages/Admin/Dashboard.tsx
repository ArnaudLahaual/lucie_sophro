import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosconfig";
import { Table } from "antd";
import type { TableProps } from "antd/lib";
import LoaderInline from "../../components/Loader/LoaderInline";
import "../../components/Loader/LoaderInline.css";
import TableData from "../../components/TableData/TableData";

type Booking = {
  id: number;
  firstname: string;
  lastname: string;
  subject: string;
  time_slot: {
    date: string;
    time: string;
  };
};

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const today = new Date().toLocaleDateString("fr-FR");
  const columns: TableProps<Booking>["columns"] = [
    {
      title: "Heure",
      dataIndex: ["time_slot", "time"],
    },
    {
      title: "Nom",
      dataIndex: "lastname",
    },
    {
      title: "Prénom",
      dataIndex: "firstname",
    },
    {
      title: "Sujet",
      dataIndex: "subject",
    },
    {
      title: "Lieu",
      dataIndex: "subject_place",
    },
  ];

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/bookings/today")
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "erreur lors de la récupération des bookings du jour :",
          err,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="dashboard-grid">
        {loading ? (
          <div className="slots-loader">
            <LoaderInline />
          </div>
        ) : (
          <div>
            <h3>Aujourd’hui {today}</h3>{" "}
            <p>
              {data.length > 0
                ? `Vous avez ${data.length} réservation${data.length > 1 ? "s" : ""}`
                : "Aucune réservation ce jour"}
            </p>
            <TableData
              columns={columns}
              dataSource={data}
              rowKey="id"
              pagination={false}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
}
