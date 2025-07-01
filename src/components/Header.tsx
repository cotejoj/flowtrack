import { FaProjectDiagram } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <FaProjectDiagram className="header-icon" />
      <h1>FlowTrack</h1>
    </header>
  );
}
