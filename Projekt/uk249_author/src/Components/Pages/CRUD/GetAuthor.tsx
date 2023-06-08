import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AuProp } from "../../Service/AuthorProp";
import ReturnPageButton from "../../Atoms/done/ReturnPageButton";
import PutButton from "../../Atoms/implement/PutButton";
import DeleteButton from "../../Atoms/implement/DeleteButton";
import AuthorService from "../../Service/AuthorService";
import { useParams } from "react-router";

const DetailsAuth = () => {
  const {id} = useParams()
  const [author, setAuthor] = useState<AuProp>();

  useEffect(() => {
    if (!id) {
      return; 
    }

    AuthorService.getAuthorByID(Number(id))
      .then((authordata) => setAuthor(authordata))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {author && author.id !== undefined && (
        <div>
          <ReturnPageButton />
          <Card
            sx={{
              maxWidth: 800,
              margin: "0 auto",
              padding: 5,
              height: 500,
              marginY: 12,
              textAlign: "left",
              backgroundColor: "rgba(119, 119, 119, 0.58)",
            }}
          >
            <Typography variant="h6">
              <div className="AUTHauthorName">{author.author_name}</div>
            </Typography>
            <Typography variant="subtitle1">
              <div className="AUTHotherInformation">
                id: {author.id} <br />
                birth date: {author.birth_date}
              </div>
            </Typography>
            <Box>
              <PutButton authorId={author.id} />
              <DeleteButton authorId={author.id} />
            </Box>
          </Card>
        </div>
      )}
      
    </>
  );
};

export default DetailsAuth;
