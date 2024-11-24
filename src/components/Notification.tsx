import React, { useEffect } from "react";
import { NotificationProps } from "../types/Products";

const Notification: React.FC<NotificationProps> = ({
  message,
  show,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // Hide notification after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Notification;
