import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
// import PostAuthor from "../Pages/Methods/PostAuthor";
import { useState } from "react";

function PostButton() {
  const [click, setClick] = useState(false);

  const clickedButton = () => {
    setClick(true);
  };

  if (click) {
    return <Link to="/author" />;
  }

  return (
    <div id="click" onClick={clickedButton}>
      <Link to="/author" style={{ textDecoration: "none" }}>
        <IconButton
          sx={{
            backgroundColor: "#FFC4EB",
            borderRadius: "50%",
            position: "absolute",
            left: "20px",
            top: "20px",
            "&:hover": {
              backgroundColor: "#C579AB", 
            },
          }}
        >
          <AddIcon sx={{ fontSize: 40, color: "black" }} />
        </IconButton>
      </Link>
    </div>
  );
}

export default PostButton;
