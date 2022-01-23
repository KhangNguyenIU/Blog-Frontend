import React from "react";
import {AiOutlineClose} from 'react-icons/ai'

const PreviewCover = (props) => {
    
  return (
    <React.Fragment>
      {props.isUploadBackground && props.previewBackground && (
        <div className="block text-center">
          <div className="flex justify-center cursor-pointer">
            <AiOutlineClose
            fontSize={24}
              onClick={() => {
                props.setPreviewBackground("");
                props.setIsUploadBackground(false);
              }}
            />
          </div>
          <img
            className="max-h-[700px] min-w-[600px] max-w-full object-cover mx-auto opacity-90  hover:opacity-100 ease-in-out duration-100"
            src={props.previewBackground}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default PreviewCover;
