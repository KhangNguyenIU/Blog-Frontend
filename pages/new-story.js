import React, { useEffect, useRef, useState } from "react";
import MyEditor from "../Components/crud/MyEditor";
import InputTitle from "../Components/crud/InputTitle";
import InputCover from "../Components/crud/InputCover";
import PreviewCover from "../Components/crud/PreviewCover";
import Notification from "../Components/Notification";
import CategoryList from "../Components/crud/CategoryList";
import CrudNavBar from "../Components/crud/CrudNavbar";
import { getAllCategories } from "../api/category.api";
import { convertBlobToBinary } from "../utils/convertImageType";
import { createBlog } from "../api/blog.api";

const NewStory = () => {
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
     setTimeout(()=>{
      submit(processedContent)
     },1000)
    }
  };

  const submit = async (body) => {
    console.log({ body });
    try {
      const res = await createBlog({
        title: title,
        cover: previewBackground,
        body: body,
        categories: selectedCategories,
        user: 1,
      });
      console.log(res);
    } catch (error) {
      notificationComponentRef.current("Fail to post your blog, please try later", "error");
    }
  };
  
  return (
    <React.Fragment>
      <CrudNavBar modalRef={modalRef} title={title} background={previewBackground} content={content} />
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
        {/* <MyEditor setContent={setContent} content={content} /> */}
        {/* <button onClick={()=>modalRef.current()}>
          Click
        </button> */}
      </div>

      <CategoryList
        modalRef={modalRef}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleSubmitBlog={handleSubmitBlog}
      />
      <Notification message="loading" childRef={notificationComponentRef} />
    </React.Fragment>
  );
};

export default NewStory;
