import "./Sidebar.css";
import sidebar1 from "../../assets/sidebar1.svg";
import sidebar2 from "../../assets/sidebar2.svg";
import sidebar3 from "../../assets/sidebar3.svg";
import sidebar4 from "../../assets/sidebar4.svg";


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_icons">
          <img src={sidebar1} alt="Icone yoga" />
          <img src={sidebar2} alt="Icone natation" />
          <img src={sidebar3} alt="Icone cyclisme" />
          <img src={sidebar4} alt="Icone musculation" />
      </div>

    <p className="sidebar_copyright">
      Copyright, SportSee 2020
    </p>
    </aside>
  );
}

export default Sidebar;