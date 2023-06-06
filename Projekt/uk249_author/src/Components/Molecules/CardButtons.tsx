import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuProp } from "../Service/AuthorProp";

interface CardButtonProps {
  authors: AuProp[];
}

const CardButton = ({ authors }: CardButtonProps) => {
  return (
    <>
      {authors.map((author) => (
        <Link to={`/author/${author.id}`} key={author.id}>
          <Button>
            <div className="homeCard">
            <Card sx={{ 
              marginTop: 10,
            }}>
              <Typography variant="h6">
              <div className="authorName1">{author.author_name}</div>
              </Typography>
              <Typography variant="subtitle1">
              <div className="otherInformation">
                {author.id} <br />
                {author.birth_date}
              </div>
              </Typography>
            </Card>
            </div>
          </Button>
        </Link>
      ))}
    </>
  );
};

export default CardButton;
