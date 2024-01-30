import { Button } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/ROUTES";

const EditProfile = ({ thisId, thisAdmin }) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`${ROUTES.EDITPROFILE}/${thisId}`);
  };

  return (
    <Fragment>
      <Button
        disabled={thisAdmin}
        variant="contained"
        sx={{
          transition: "all 0.5s",
          mt: "2%",
          width: "100%",
        }}
        onClick={handleEditClick}
      >
        Edit User
      </Button>
    </Fragment>
  );
};
export default EditProfile;
