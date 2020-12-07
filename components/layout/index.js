import React from "react";
import Footer from "./footer";
import MainNav from "./header";

const Layout = ({ children }) => (
  <div id="content">
    <MainNav />
    {children}
    <Footer />
  </div>
);

export default Layout;
