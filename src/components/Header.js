import { useLocation, useHistory } from "react-router-dom";
import Arrow from "../assets/Icon.svg";

const Header = () => {
  let history = useHistory();
  let { pathname } = useLocation();
  return (
    <div className="header">
      {pathname === "/" ? null : (
        <div className="header-arrow" onClick={() => history.push("/")}>
          <img src={Arrow} alt="Arrow" />
        </div>
      )}
      <div className="header-content">chuck norris</div>
    </div>
  );
};

export default Header;
