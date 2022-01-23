import React, { useEffect, useRef, useState } from "react";
import Backdrop from "./Backdrop";
import { AiOutlineClose } from "react-icons/ai";
import useClickOutside from "../../hooks/useClickOutside";
const Modal = ({ children, childRef, isPopup, width, height }) => {
  let dimension = `sm:w-[32rem] sm:h-[36rem]`;
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null)

  useEffect(() => {
    childRef.current = handlePopup;
  }, []);

  useClickOutside(modalRef,()=>{
    if(open) setOpen(false)
  })

  const handlePopup = () => setOpen((state) => !state);

  return (
    <React.Fragment>
      <div className={`${open ? 'visibile' : 'invisible'}`}>
        <Backdrop isPopup={open} />
        <div
        ref={modalRef}
          className={`${dimension} w-full h-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  max-h-full bg-white flex z-20 absolute`}
        >
          <div className="relative cursor-pointer text-gray-500 left-[50%] top-5 hover:text-gray-600">
            <AiOutlineClose fontSize={24} onClick={handlePopup} />
          </div>
          <div className="flex flex-col  items-center flex-1">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
