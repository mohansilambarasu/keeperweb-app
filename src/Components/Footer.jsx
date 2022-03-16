import React from "react";
import ReactDom from "react-dom";

function Footer() {
  var currDate = new Date();
  var currYear = currDate.getFullYear();

  return <footer>
          <p>Copyright <i className="fa-solid fa-copyright"></i> {currYear} </p>
        </footer>
}

export default Footer;
