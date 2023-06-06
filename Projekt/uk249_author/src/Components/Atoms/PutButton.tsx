import { Link } from "react-router-dom";
// import PostAuthor from "../Pages/Methods/PostAuthor";
import { useState } from "react";

function PutButton() {
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

      </Link>
    </div>
  );
}

export default PutButton;