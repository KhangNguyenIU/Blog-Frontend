import React, { useEffect, useImperativeHandle } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const toastAttributes = {
  position: "bottom-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};
const  Notification = ({ childRef }) => {
    
  useEffect(() => {
    childRef.current = notify
  }, []);



  const notify = (message,type) => {
    switch (type) {
      case "success":
        toast.success(message, { ...toastAttributes });
        break;
      case "loading":
        toast.loading(message, { ...toastAttributes });
        break;
      case "error":
        toast.error(message, { ...toastAttributes });
        break;
      default:
        toast.info(message, { ...toastAttributes });
    }
  };

  return (
    <React.Fragment>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </React.Fragment>
  );
};

export default Notification;
