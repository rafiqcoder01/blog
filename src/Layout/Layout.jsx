import React from "react";
import { Footer,Header } from "../components/index";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
