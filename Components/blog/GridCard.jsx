import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { CardHorizontal } from "./card/CardHorizontal";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 6;

export default function App({chilRef}) {
  const listRef = useRef(null);
  const router = useRouter();

  useEffect(()=>{
    chilRef.current = loadMore
  },[])

  const loadMore =() => setSize((size) => size + 1)
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
  const paginatedBlogs = blogs?.flat();
  const isLoadingInitialData = !blogs && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && blogs && typeof blogs[size - 1] === "undefined");
  const isEmpty = blogs?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (blogs && blogs[blogs.length - 1]?.length < PAGE_SIZE);
  
    const handleScroll = () => {
      // kiem tra xem scroll co vuot qua bottom khong
      if (
        listRef.current.scrollTop + listRef.current.clientHeight >=
        listRef.current.scrollHeight
      ) {
        if (!isLoadingMore && !isReachingEnd) {
          setSize(size + 1);
        }
      }
      console.log('scroll')
    }

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div onScroll={handleScroll}>
        {paginatedBlogs?.map((blog, index) => (
          <CardHorizontal
            blog={blog}
            onClick={() => router.push(`/blog/${blog.id}`)}
            key={`${blog.title}-${index}`}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {!isReachingEnd && (
          <button
            className="text-gray-600 cursor-pointer font-lora-sans"
            onClick={() => setSize((size) => size + 1)}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
}
