import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { AuProp } from "../Service/AuthorProp";

interface DetailsAuthProps {
  authors: AuProp[];
}

const DetailsAuth = ({ authors }: DetailsAuthProps) => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find((author) => author.id.toString() === id);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <Card sx={{ maxWidth: 800, margin: "0 auto", padding: 5, height: 500, marginY: 12, textAlign: "left" }}>
      <Typography variant="h6">
        <div className="AUTHauthorName">{author.author_name}</div>
      </Typography>
      <Typography variant="subtitle1">
        <div className="AUTHotherInformation">
          id: {author.id} <br /> 
          birth date: {author.birth_date}
        </div>
      </Typography>
    </Card>
  );
};

export default DetailsAuth;
