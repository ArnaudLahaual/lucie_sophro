import { Modal, Button } from "antd";
import axiosInstance from "../../../api/axiosconfig";
import { useSnackbar } from "notistack";
import type { Dayjs } from "dayjs";
import type { Slot } from "../../../types/slot";
import "../components/css/ModalBooking.css";
type Props = {
  open: boolean;
  onCancel: () => void;
  date: Dayjs;
  slots: Slot[];
  formData: any;
  setSelectedSlot: (value: number | null) => void;
  setSlots: (slots: Slot[]) => void;
  form: any;
};

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

  const handleConfirm = () => {
    if (!formData) return;

    axiosInstance
      .post("/addBooking", formData)
      .then(() => {
        enqueueSnackbar("Votre réservation a bien été prise en compte.", {
          variant: "success",
        });

        form.resetFields();
        setSelectedSlot(null);
        onCancel();

        return axiosInstance.get(`/slots?date=${date.format("YYYY-MM-DD")}`);
      })
      .then((resp: { data: Slot[] }) => {
        setSlots(resp.data);
      })
      .catch(() => {
        enqueueSnackbar("Une erreur est survenue.", {
          variant: "error",
        });
      });
  };
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      className="booking-modal"
    >
      <div className="modal-content">
        <h2 className="modal-title">Confirmation de réservation</h2>

        <p className="modal-subtitle">
          Vérifiez les informations avant de confirmer
        </p>

        <div className="modal-card">
          <div className="modal-row">
            <span className="modal-label">Date</span>
            <span className="modal-value">{date.format("DD MMMM YYYY")}</span>
          </div>

          <div className="modal-row">
            <span className="modal-label">Heure</span>
            <span className="modal-value">
              {formData &&
                slots.find((slot) => slot.id === formData.time_slot_id)?.time}
            </span>
          </div>

          <div className="modal-row">
            <span className="modal-label">Séance</span>
            <span className="modal-value">
              {formData?.subject === "resa_adulte"
                ? "Séance adulte"
                : "Séance enfant"}
            </span>
          </div>
        </div>

        <p className="modal-warning">
          Cette action est définitive. Voulez-vous confirmer votre réservation ?
        </p>

        <div className="modal-actions">
          <Button onClick={onCancel} className="modal-cancel">
            Annuler
          </Button>

          <Button
            type="primary"
            className="modal-confirm"
            onClick={handleConfirm}
          >
            Confirmer la réservation
          </Button>
        </div>
      </div>
    </Modal>
  );
}
