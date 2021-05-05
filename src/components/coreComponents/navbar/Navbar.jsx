import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
require("./Navbar.scss");

const Navbar = () => {
  const contactsData = useSelector((state) => state.contact.contacts);
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            HOME
          </Link>
          <span className="plain-white">
            Total Associates: {contactsData.length}
          </span>
          <div>
            <Link to="/badges" className="btn btn-light ml-auto" style={{marginRight:'10px'}}>
              React Badges
            </Link>
            <Link to="/contacts/add" className="btn btn-light ml-auto">
              Create New
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
