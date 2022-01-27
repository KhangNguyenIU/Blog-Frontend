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
import { useSelector } from "react-redux";
import Layout from "../Components/layout/Layout";
import { CreateBlog } from "../Components/crud/CreateBlog";

const NewStory = () => {
  
  
  return (
    <React.Fragment>
      <Layout>
     <CreateBlog/>
      </Layout>
  
    </React.Fragment>
  );
};

export default NewStory;
