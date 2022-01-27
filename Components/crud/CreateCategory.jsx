import React, { useRef, useState } from "react";
import { createNewCategory } from "../../api/category.api";
import Modal from "../modal/Modal";
import Notification from "../Notification";
/**
 * @author
 * @function CreateCategory
 **/

export const CreateCategory = ({ modalRef }) => {
  const [cate, setCate] = useState("");
  const notiRef = useRef(null);
  const handleTextChange = (e) => {
    setCate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createNewCategory({ name: cate });
      if (res.statusText==='Created') {
        console.log({ res });
        notiRef.current('Category  has been added', "success");
      }
    } catch (error) {
        notiRef.current(`Failed to add new category, try again`, error);
    }
  };
  return (
    <div>
      <Modal
        childRef={modalRef}
        width={"30rem"}
        height={"38rem"}
        className="z-70"
      >
        <h1 className="font-semibold text-2xl font-lora-sans text-gray-600 my-20">
          Create a brand new category
        </h1>

        <input
          type="text"
          placeholder="Typing..."
          className="w-1/2 border-b-[1px] border-gray-500 pb-2 outline-none"
          value={cate}
          onChange={handleTextChange}
        />
        <div className="p-5">
          <button
            className="px-4 py-2 rounded-full bg-black text-white font-nunito-sans text-md mt-20 hover:shadow-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Modal>
      <Notification childRef={notiRef} />
    </div>
  );
};
