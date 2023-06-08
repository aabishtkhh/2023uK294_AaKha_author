import Button from "@mui/material/Button";
import KeyboardReturnTwoToneIcon from '@mui/icons-material/KeyboardReturnTwoTone';
import { Link } from "react-router-dom";
import { useState } from "react";


function ReturnPageButton() {
  const [click, setClick] = useState(false);

  const clickedButton = () => {
    setClick(true);
  };

  if (click) {
    return <Link to={`/author`} />;
  }

  return (
    <div id="click" onClick={clickedButton}>
      <Link to={"/author"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            backgroundColor: "#ABC798",
            borderRadius: "10%",
            position: "absolute",
            left: "70px",
            top: "20px",
            "&:hover": {
              backgroundColor: "#DCDCDC", 
            },
            animation: 0.7,
          }}
        >
          <KeyboardReturnTwoToneIcon sx={{ fontSize: 40, color: "black" }} />
        </Button>
      </Link>
    </div>
  );
}

export default ReturnPageButton;

