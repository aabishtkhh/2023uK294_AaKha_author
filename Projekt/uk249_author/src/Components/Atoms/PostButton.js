import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


function PostButton() {
    return (
        <IconButton aria-label="postButton" sx={{ backgroundColor: "#FFC4EB", borderRadius: "50%", marginLeft: 5, marginTop: 2 }}>
        <AddIcon sx={{ fontSize: 40, color: 'black'}} />
      </IconButton>
    );
  }
  
  export default PostButton;