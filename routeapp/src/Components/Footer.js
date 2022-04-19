import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#212529", marginTop: 30 }}>
      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <p className="nav-link px-2 text-muted">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-muted">Features</p>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-muted">FAQs</p>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-muted">About</p>
          </li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
