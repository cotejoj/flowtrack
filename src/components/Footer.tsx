import { FaCode, FaGlobe } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>
        <FaCode className="footer-icon" /> Created by{" "}
        <a
          href="https://your-portfolio-url.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Jomar Cotejo
        </a>{" "}
        <FaGlobe className="footer-icon" />
      </p>
    </footer>
  );
}
