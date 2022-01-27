import React, { useEffect, useRef, useState } from "react";
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
