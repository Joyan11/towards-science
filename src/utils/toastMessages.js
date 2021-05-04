import { toast } from "react-toastify";

export const toastMessages = (message) => {
  return toast.dark(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    draggablePercent: 60,
  });
};
