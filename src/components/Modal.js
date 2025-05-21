import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ notifContent, closeNotif }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotif();
    }, 2000); // funkce se spustí za dvě vteřiny
  });

  return <div className="notification">{notifContent}</div>;
};

export default Modal;
