import React, { useRef } from "react";
import Backdrop from "../modal/Backdrop";
import Modal from '../modal/Modal'
let arr = [
  "Seinen",
  "manga",
  "anime",
  "psychology",
  "thriller",
  "romance",
  "schoolife",
];
const CategoryList = ({ modalRef,categories,selectedCategories, setSelectedCategories,handleSubmitBlog }) => {

  const selectCategory = (id) => {
    if (selectedCategories.includes(id)) {
        let i = selectedCategories.indexOf(id)
        selectedCategories.splice(i, 1)
    } else {
        selectedCategories.push(id)
    }
    setSelectedCategories([...selectedCategories])

}
  return (
    <React.Fragment>
      <Modal childRef={modalRef} width={"30rem"} height={"38rem"}>
        <h1 className="text-4xl font-serif text-gray-700 mt-20 mb-10">
          One more step
        </h1>
        <div className="flex flex-wrap px-5 justify-center mt-20">
          {categories.map((item, index) => (
            <span
              className={`py-2 px-4  hover:bg-gray-400 mr-5 mb-5  cursor-pointer  text-sm font-sans ${selectedCategories.includes(item.id) ? "bg-gray-500" : "bg-gray-300"}`}
              key={`${item.name}-${index}`}
              onClick={()=>selectCategory(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="m-20">
          <button className="py-2 px-5 border-[1px]  rounded-[30px] bg-black text-white hover:text-white ease-linear cursor pointer hover:ease-in hover:duration-100 hover:drop-shadow hover:border-black"
          onClick={handleSubmitBlog}
          >
            Submit
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CategoryList;
