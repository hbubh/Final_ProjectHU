import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
const NotFound = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    navigate(ROUTES.HOME);
  };
  return (
    <div style={{ width: "100%", height: "100%", padding: "8%" }}>
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src="/assets/images/404.png"
        alt="404"
      />
      <div
        onClick={handleHomeClick}
        style={{
          marginTop: "2%",
          padding: "0.5%",
          width: "50%",
          marginLeft: "25%",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "2px solid blueviolet",
        }}
      >
        Take me Back to Home-Page
      </div>
    </div>
  );
};
export default NotFound;
