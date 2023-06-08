import { Link } from "react-router-dom";
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import Button from "@mui/material/Button";

interface PutButtonProps {
  authorId: number;
}

const PutButton = ({ authorId }: PutButtonProps) => {
  return (
    <Link to={`/author/update-author/${authorId}`}>
      <Button
        sx={{
          position: "fixed",
          ml: "50em", //margin right
          mt: "25em", //margin right 
        }}
      >
        <BorderColorTwoToneIcon sx={{ fontSize: 30, color: "black" }} />
      </Button>
    </Link>
  );
};

export default PutButton;
