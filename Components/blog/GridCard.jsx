import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { CardHorizontal } from "./card/CardHorizontal";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 4;

export default function App() {
  const listRef = useRef(null);
  const router = useRouter()
  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null;

    return `${process.env.NEXT_PUBLIC_BASEURL}/blogs?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };
  const {
    data: blogs,
    error,
    mutate,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(getKey, fetcher);
  // console.log({blogs})
  const paginatedBlogs = blogs?.flat();
 
 


  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div>
        {paginatedBlogs?.map((blog, index) => (
          <CardHorizontal 
          blog={blog}  
          onClick={()=>router.push(`/blog/${blog.id}`)}
          key={`${blog.title}-${index}`}/>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button 
        className="text-gray-600 cursor-pointer"
        onClick={() => setSize((size) => size + 1)}>LOAD MORE</button>
      </div>
    </div>
  );
}
