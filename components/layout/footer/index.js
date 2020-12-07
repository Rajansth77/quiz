import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; IFES. All Rights Reserved.</span>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </footer>
  );
};

export default Footer;
