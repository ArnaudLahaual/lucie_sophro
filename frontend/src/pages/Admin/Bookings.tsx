import { Button, type TableProps } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosconfig";
import LoaderInline from "../../components/Loader/LoaderInline";
import "../../components/Loader/LoaderInline";
import TableData from "../../components/TableData/TableData";
import type { TableRowSelection } from "antd/lib/table/interface";
import { useSnackbar } from "notistack";
import { ModalDeleteBooking } from "../Reservations/components/ModalDeleteBooking";

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
  const [loadingSpinner, setloadingSpinner] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setloadingSpinner(true);

    axiosInstance
      .get(`/bookings`)
      .then((resp: { data: Booking[] }) => {
        setData(resp.data);
        setloadingSpinner(false);
      })
      .catch((err) => {
        console.error("erreur lors de la récupération des bookings :", err);
      })
      .finally(() => {
        setloadingSpinner(false);
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
      dataIndex: ["time_slot", "date"],
      key: "date",

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
      dataIndex: ["time_slot", "time"],
      key: "time",

      filters: [...new Set(data.map((d) => d.time_slot.time))].map((time) => ({
        text: time,
        value: time,
      })),

      onFilter: (value, record) => record.time_slot?.time === value,
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space>
    //       <Button
    //         danger
    //         onClick={() => {
    //           console.log(record);
    //         }}
    //       >
    //         Supprimer
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Booking> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  // const handleDelete = async () => {
  //   try {
  //     await axiosInstance.post("/bookings/delete", {
  //       ids: selectedRowKeys,
  //     });
  //     enqueueSnackbar("Réservation supprimée", {
  //       variant: "success",
  //     });
  //     setData((prev) =>
  //       prev.filter((item) => !selectedRowKeys.includes(item.id)),
  //     );

  //     setSelectedRowKeys([]);
  //   } catch (error: any) {
  //     const message =
  //       error.response?.data?.message ||
  //       "Erreur de suppression des réservations";

  //     enqueueSnackbar(message, {
  //       variant: "error",
  //     });
  //     console.error("Erreur suppression :", error);
  //   }
  // };

  const selectedBookings = data.filter((item) =>
    selectedRowKeys.includes(item.id),
  );

  return loadingSpinner ? (
    <div className="slots-loader">
      <LoaderInline />
    </div>
  ) : (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Réservations</h2>
        {hasSelected && (
          <Button danger onClick={handleOpen}>
            Supprimer {selectedRowKeys.length}
          </Button>
        )}
      </div>
      <ModalDeleteBooking
        open={open}
        onCancel={handleClose}
        setData={setData}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedBookings={selectedBookings}
      />
      <TableData
        dataSource={data}
        columns={columns}
        rowKey="id"
        rowSelection={rowSelection}
        loading={loadingSpinner}
      />{" "}
    </div>
  );
}
