import { Link, useNavigate } from "react-router-dom";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Button from "@mui/material/Button";
import AuthorService from "../Service/AuthorService";

interface DeleteButtonProps {
  authorId: number;
}


const DeleteButton =  ({ authorId }: DeleteButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    AuthorService.delAuthor(authorId).then(response => (navigate(
      "/author",{replace:true} ))).catch();
  }

  return (
      <Link to={`/author/update-author/${authorId}`}>
      <Button onClick={handleClick}
        sx={{
          position: "fixed",
          ml: "54em", //margin right
          mt: "25em", //margin right 
        }}
      >
      <DeleteOutlineTwoToneIcon sx={{ fontSize: 30, color: "black" }} />
      </Button>
    </Link>
  );
};

export default DeleteButton;

