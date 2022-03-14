
import { toast } from "react-toastify";

export function showSuccess(message) {
  toast.success(message, {
    position: "top-right",
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    className: "toastify-text",
    autoClose: 1500
  });
}

export function showError(message) {
  toast.error(message, {
    position: "top-right",
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    className: "toastify-text",
    autoClose: 1500
  });
}
