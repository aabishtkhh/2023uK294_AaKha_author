import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";

function LogOutButton() {
  const [click, setClick] = useState(false);

  const clickedButton = () => {
    setClick(true);
  };

  if (click) {
    return <Link to={`/sign-up`} />;
  }

  return (
    <div id="click" onClick={clickedButton}>
      <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            backgroundColor: "#ABC798",
            borderRadius: "10%",
            position: "absolute",
            right: "70px",
            top: "30px",
            "&:hover": {
              backgroundColor: "#567B3D",
            },
            animation: 0.7,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: 20, color: "#435F30" }}>Log Out</Typography>
        </Button>
      </Link>
    </div>
  );
}

export default LogOutButton;
