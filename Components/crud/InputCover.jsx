import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const InputCover = (props) => {
  const handlePreviewBackground = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        props.setPreviewBackground(e.target.result);
        props.setIsUploadBackground(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      {!props.isUploadBackground && (
        <div className="flex justify-center">
          <div className=" cursor-pointer flex items-center justify-center">
            <label htmlFor="input" className="cursor-pointer">
              <AiOutlinePlus
                fontSize={30}
                className="text-stone-400 hover:text-stone-600 ease-in duration-150"
              ></AiOutlinePlus>
              <input
                id="input"
                hidden
                type="file"
                onChange={handlePreviewBackground}
              />
            </label>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default InputCover;
