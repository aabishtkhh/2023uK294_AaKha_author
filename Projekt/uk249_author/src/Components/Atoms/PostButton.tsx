import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useState } from "react";


function PostButton() {
  const [click, setClick] = useState(false);

  const clickedButton = () => {
    setClick(true);
  };

  if (click) {
    return <Link to={`/author/create-author/`} />;
  }

  return (
    <div id="click" onClick={clickedButton}>
      <Link to={"/author/create-author/"} style={{ textDecoration: "none" }}>

        <Button
          sx={{
            backgroundColor: "#FFC4EB",
            borderRadius: "10%",
            position: "absolute",
            left: "70px",
            top: "25px",
            "&:hover": {
              backgroundColor: "#C579AB", 
            },
            animation: 0.7,
          }}
        >
          <AddIcon sx={{ fontSize: 40, color: "black" }} />
        </Button>
      </Link>
    </div>
  );
}

export default PostButton;
