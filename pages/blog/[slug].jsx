import React from "react";
import { renderHTMLfromBlocks } from "../../utils/renderHTML";
import { RiFacebookLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { IconContext } from "react-icons";
import "../../styles/Home.module.scss";
import { getBlogs, fetchBlogById } from "../../api/blog.api";
import Image from "next/image";
import Layout from "../../Components/layout/Layout";
import Head from "next/head";
const iconClass =
  "p-[8px] w-[34px] h-[34px] border-black border-[1px] m-1 rounded-full cursor-pointer hover:border-[#49c5b6]  ease-in duration-150 color-red";
const BlogkPage = ({ blog }) => {
  let formatedDate = new Date(blog.created_at);
  const arrayIconTag = () => (
    <div className="flex justify-center item-center mt-2">
      <div className="flex justify-between">
        <IconContext.Provider
          value={{ className: "hover:text-[#49c5b6] ease-in duration-150" }}
        >
          <div key="IhTb" className={iconClass}>
            <RiFacebookLine fontSize={18} />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: "hover:text-[#49c5b6] ease-in duration-150" }}
        >
          <div key="NhYj" className={iconClass}>
            <BsTwitter fontSize={18} />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: "hover:text-[#49c5b6] ease-in duration-150" }}
        >
          <div key="Unsr" className={iconClass}>
            <BiLink fontSize={18} />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );

  const head = () => (
    <Head>
      <title>{blog.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="REFRESH" content="1800" />
      <meta name="description" content={blog.exceprt} />
      <meta name="keywords" content={`review ${blog.title}`} />
      <meta name="googlebot" content="noarchive" />
      <meta name="robots" content="noarchive" />

      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_FE_URL}/blog/${blog.slug}`}
      />
      <meta property="og:title" content={`${blog.title}`} />
      <meta property="og:description" content={blog.exceprt} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_FE_URL}/blog/${blog.slug}`}
      />
      <meta
        property="og:site_name"
        content={`${process.env.NEXT_PUBLIC_FE_URL}`}
      />

      <meta property="og:image" content={`${blog.cover}`} />
      <meta property="og:image:secure_url" content={`${blog.cover}`} />
      <meta property="og:image:type" content="image/png" />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="flex flex-col items-center">
          <div className="mt-5 font-medium text-[2rem] md:text-[3rem] font-lora-serif text-center px-5">
            {blog.title}
          </div>

          <div>
            <p className="mt-2 uppercase text-[#202121] text-[13px] ">
              article by{" "}
              <span className="text-[#45a1c3]">{blog.user.username} </span> -{" "}
              <span>{formatedDate.toLocaleDateString()}</span>{" "}
            </p>
            {arrayIconTag()}
          </div>

          <div className="min-h-[700px] max-h-[700px] max-w-full relative min-w-[600px] mt-5">
            <Image
              src={blog.cover}
              alt="background-cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="container-wrapper">
          {renderHTMLfromBlocks(JSON.parse(blog.body).blocks)}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const blogs = await getBlogs().then((response) => response.data);
  const paths = blogs.map((blog, index) => {
    return {
      params: {
        slug: `${blog.slug}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetchBlogById(params.slug).then((res) => res.data);
  if (!data || data.length == 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data,
    },
  };
}

export default BlogkPage;
