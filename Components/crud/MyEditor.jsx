import React, { useEffect, useState } from "react";
import Dante from "Dante2";
import { renderHTMLfromBlocks } from "../../utils/renderHTML";
import { dummyData } from "../../utils/dummyData";

const MyEditor = ({content,setContent}) => {
  // const [content, setContent] = React.useState("");
  const [isShow, setIsShow] = useState(true)

  // useEffect(() => {
  //   console.log(dummyData);
  // }, [content]);

  let danteProps = {
    data_storage: {
      url: "xxx",
      save_handler: function (editorContext, content) {
        setContent(editorContext.editorContent);
      },
    },
  };

  return (
    <React.Fragment>
      <div
        className="word-wrap "
      >
        
        <Dante {...danteProps} />

        {/* <div className="css-16651b7 css-isi0on word-wrap graf graf--p">
          {isShow &&
            
            renderHTMLfromBlocks(dummyData.blocks)
            }
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default MyEditor;
