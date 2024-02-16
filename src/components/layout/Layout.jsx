import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title,
  keyword,
  description,
  author = "Prince Nishad",
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>
      <Navbar />
      <main className="w-full bg-white" style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
