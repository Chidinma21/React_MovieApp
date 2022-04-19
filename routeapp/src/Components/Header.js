import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ handleChange, handleFilter }) => {
  const [entry, setEntry] = useState("");

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">HOOKED</h1>
          <Link to="/">
            <p style={{ color: "white", fontSize: "125%" }}>Home</p>
          </Link>
          <p style={{ marginRight: 500, color: "white", fontSize: "125%" }}>
            Features
          </p>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text number"
              placeholder="Search by Movie Title or Rating"
              value={entry}
              onChange={(e) => {
                setEntry(e.target.value);
              }}
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                handleFilter(entry);
              }}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-light"
              style={{ marginLeft: 10, width: 200 }}
              onClick={handleChange}
            >
              Add Movie
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
