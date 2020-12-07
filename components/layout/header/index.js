import Link from "next/link";
import React from "react";

const MainNav = () => (
  <nav className="navbar navbar-expand-lg px-3 px-md-5 pt-3">
    <Link href="/">
      <a className="navbar-brand">IEFS</a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon">
        <i className="fa fa-bars" />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <NavLink />
        <NavLink url="/about" title="About" />
        <NavLink url="/contact-us" title="Contact" />
        <NavLink url="/quiz" title="Quiz" />
        <NavLink
          url="/participate"
          title="
              Partitcipate"
        />
        {/* <NavLink url="/completion" title="Completion" /> */}
      </ul>
    </div>
  </nav>
);

export default MainNav;

const NavLink = ({ title = "Home", url = "/" }) => (
  <li className="nav-item active">
    <Link href={url}>
      <a className="nav-link">
        {title} <span className="sr-only">(current)</span>
      </a>
    </Link>
  </li>
);
