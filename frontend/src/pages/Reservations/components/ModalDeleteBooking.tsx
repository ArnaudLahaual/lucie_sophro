import { useSnackbar } from "notistack";
import axiosInstance from "../../../api/axiosconfig";
import { Button, Modal, Spin } from "antd";
import { useState } from "react";

type Booking = {
  id: number;
  firstname: string;
  lastname: string;
  subject: string;
  subject_place: string;
  time_slot: {
    date: string;
    time: string;
  };
};

type Props = {
  open: boolean;
  onCancel: () => void;
  setData: React.Dispatch<React.SetStateAction<Booking[]>>;
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: (value: React.Key[]) => void;
  selectedBookings: Booking[];
};

type Step = "confirm" | "loading" | "success";

export function ModalDeleteBooking({
  open,
  onCancel,
  setData,
  selectedRowKeys,
  setSelectedRowKeys,
  selectedBookings,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [step, setStep] = useState<Step>("confirm");

  const closeModal = () => {
    setStep("confirm");
    onCancel();
  };

  const handleConfirm = async () => {
    try {
      setStep("loading");

      await axiosInstance.post("/bookings/delete", {
        ids: selectedRowKeys,
      });

      setData((prev) =>
        prev.filter((item) => !selectedRowKeys.includes(item.id)),
      );

      setSelectedRowKeys([]);

      enqueueSnackbar("Réservation(s) supprimée(s)", {
        variant: "success",
      });

      setStep("success");
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Erreur de suppression des réservations";

      enqueueSnackbar(message, {
        variant: "error",
      });

      setStep("confirm");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={closeModal}
      footer={null}
      centered
      className="booking-modal"
    >
      {step === "confirm" && (
        <div className="modal-content">
          <h2 className="modal-title">Confirmation de suppression</h2>

          <p className="modal-subtitle">
            Vous allez supprimer {selectedBookings.length} réservation(s)
          </p>

          <div className="modal-card">
            {selectedBookings.map((booking) => (
              <div key={booking.id} className="modal-row">
                <span>
                  {booking.firstname} {booking.lastname}
                </span>
                <span>
                  <strong>
                    {booking.time_slot.date} — {booking.time_slot.time}
                  </strong>
                </span>
              </div>
            ))}
          </div>

          <p className="modal-warning">Confirmer la suppression ?</p>

          <div className="modal-actions">
            <Button onClick={closeModal} className="modal-cancel">
              Annuler
            </Button>

            <Button danger type="primary" onClick={handleConfirm}>
              Supprimer
            </Button>
          </div>
        </div>
      )}

      {step === "loading" && (
        <div className="modal-loading">
          <Spin size="large" />
          <p>Suppression en cours...</p>
        </div>
      )}

      {step === "success" && (
        <div className="modal-success">
          <h2>Réservation(s) supprimée(s)</h2>

          <Button type="primary" onClick={closeModal}>
            OK
          </Button>
        </div>
      )}
    </Modal>
  );
}
