import React ,{useState,useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { createBlog } from "../../api/blog.api";
import { getAllCategories } from "../../api/category.api";
import { convertBlobToBinary } from "../../utils/convertImageType";
import Notification from "../Notification";
import CategoryList from "./CategoryList";
import CrudNavBar from "./CrudNavbar";
import InputCover from "./InputCover";
import InputTitle from "./InputTitle";
import MyEditor from "./MyEditor";
import PreviewCover from "./PreviewCover";

/**
 * @author
 * @function CreateBlog
 **/

export const CreateBlog = (props) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState({});
  const [previewBackground, setPreviewBackground] = useState("");
  const [isUploadBackground, setIsUploadBackground] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const notificationComponentRef = useRef(null);
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const userstate = useSelector(state =>state.user)
  console.log(userstate)
  useEffect(() => {
    getAllCategories()
      .then((data) => data.data)
      .then((result) => setCategories(result))
      .catch((error) => {
        notificationComponentRef.current("Error", "error");
      });
  }, []);

  const handleSubmitBlog = async () => {
    setLoading(true);
    const processedContent = await convertBlobToBinary(content);

    if (processedContent) {
      setTimeout(() => {
        submit(processedContent);
      }, 1000);
    }
  };

  const submit = async (body) => {
    try {
      const res = await createBlog({
        title: title,
        cover: previewBackground,
        body: body,
        categories: selectedCategories,
        user: userstate.id,
      });
      if(res){
        notificationComponentRef.current(
            "Submit your blog success",
            "success"
          );
      }
    } catch (error) {
      notificationComponentRef.current(
        "Fail to post your blog, please try later",
        "error"
      );
    }
  };
  return (
    <div>
      <CrudNavBar
        modalRef={modalRef}
        title={title}
        background={previewBackground}
        content={content}
      />
      <InputTitle setTitle={setTitle} />
      <InputCover
        setPreviewBackground={setPreviewBackground}
        setIsUploadBackground={setIsUploadBackground}
        isUploadBackground={isUploadBackground}
      />
      <PreviewCover
        isUploadBackground={isUploadBackground}
        previewBackground={previewBackground}
        setPreviewBackground={setPreviewBackground}
        setIsUploadBackground={setIsUploadBackground}
      />
      <div className="container-wrapper">
        <MyEditor setContent={setContent} content={content} />
      </div>

      <CategoryList
        modalRef={modalRef}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleSubmitBlog={handleSubmitBlog}
      />
      <Notification message="loading" childRef={notificationComponentRef} />
    </div>
  );
};
