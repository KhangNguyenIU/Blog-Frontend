import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import store from "../../state/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

const defaultImage =
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Layout = ({ children, title, image }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>{title || "A manga review website"}</title>
        <meta
          name="description"
          content="A manga review and compilation website"
        />
        <meta property="og:image" content={`${image || defaultImage}`} />
        <meta
          property="og:image:secure_url"
          content={`${image || defaultImage}`}
        />
        <meta property="og:image:type" content="image/png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        {router.pathname !== "/new-story" && <Navbar />}
        {children}
        <Footer />
      </Provider>
    </React.Fragment>
  );
};

export default Layout;
