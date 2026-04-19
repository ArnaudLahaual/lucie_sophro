import { Modal, Button, Spin } from "antd";
import axiosInstance from "../../../api/axiosconfig";
import { useSnackbar } from "notistack";
import type { Dayjs } from "dayjs";
import type { Slot } from "../../../types/slot";
import { useState } from "react";
import type { FormInstance } from "antd/lib";
import "../components/css/ModalBooking.css";

type BookingData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  time_slot_id: number | null;
};

type Props = {
  open: boolean;
  onCancel: () => void;
  date: Dayjs;
  slots: Slot[];
  formData: BookingData | null;
  setSelectedSlot: (value: number | null) => void;
  setSlots: (slots: Slot[]) => void;
  form: FormInstance;
};

type Step = "confirm" | "loading" | "success";

export function ModalBooking({
  open,
  onCancel,
  date,
  slots,
  formData,
  setSelectedSlot,
  setSlots,
  form,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [step, setStep] = useState<Step>("confirm");

  const slotTime = slots.find(
    (slot) => slot.id === formData?.time_slot_id,
  )?.time;

  const closeModal = () => {
    setStep("confirm");
    onCancel();
  };

  const handleConfirm = async () => {
    if (!formData) return;

    try {
      setStep("loading");

      await axiosInstance.post("/addBooking", formData);

      enqueueSnackbar("Réservation confirmée", {
        variant: "success",
      });

      const resp = await axiosInstance.get(
        `/slots?date=${date.format("YYYY-MM-DD")}`,
      );

      setSlots(resp.data);
      setSelectedSlot(null);
      form.resetFields();
      setStep("success");
    } catch (e) {
      enqueueSnackbar("Une erreur est survenue", {
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
          <h2 className="modal-title">Confirmation de réservation</h2>

          <p className="modal-subtitle">
            Vérifiez les informations avant de confirmer
          </p>

          <div className="modal-card">
            <div className="modal-row">
              <span>Date</span>
              <span>
                <strong>{date.format("DD MMMM YYYY")}</strong>
              </span>
            </div>

            <div className="modal-row">
              <span>Heure</span>
              <span>
                <strong>{slotTime}</strong>
              </span>
            </div>

            <div className="modal-row">
              <span>Séance</span>
              <span>
                <strong>
                  {formData?.subject === "resa_adulte"
                    ? "Séance adulte"
                    : "Séance enfant"}
                </strong>
              </span>
            </div>
          </div>

          <p className="modal-warning">Confirmer cette réservation ?</p>

          <div className="modal-actions">
            <Button onClick={closeModal} className="modal-cancel">
              Annuler
            </Button>

            <Button
              type="primary"
              className="modal-confirm"
              onClick={handleConfirm}
            >
              Confirmer
            </Button>
          </div>
        </div>
      )}

      {step === "loading" && (
        <div className="modal-loading">
          <Spin style={{ color: "#b89878" }} size="large" />
          <p>Confirmation en cours...</p>
        </div>
      )}

      {step === "success" && (
        <div className="modal-success">
          <div className="success-icon"></div>

          <h2>Réservation confirmée</h2>

          <p>
            Votre créneau du <strong>{date.format("DD MMMM YYYY")}</strong> à{" "}
            <strong>{slotTime}</strong> est réservé.<br></br> Vous recevrez un
            mail de confirmation avec les détails de la réservation.
          </p>

          <Button type="primary" className="modal-confirm" onClick={closeModal}>
            OK
          </Button>
        </div>
      )}
    </Modal>
  );
}
