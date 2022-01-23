import React from "react";

const InputTitle = ({ setTitle }) => {

  const handleTitleChange = (e) => {
    if (e.keyCode !== 13) setTitle(e.target.innerText);
  };


  return (
    <div className="flex justify-center item-center pt-20 pb-10  ">
      <div className="container-wrapper word-wrap text-center">
        <p
          className="text-5xl font-serif outline-none"
          contentEditable
          onInput={handleTitleChange}
          placeholder="Title..."
        ></p>
      </div>
    </div>
  );
};

export default InputTitle;
