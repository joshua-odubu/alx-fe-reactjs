import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#003366",
        color: "white",
        padding: "15px 0",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;