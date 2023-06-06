import React, { useEffect, useState } from "react";
import Postbutton from "../Atoms/PostButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardButton from "../Molecules/CardButtons";
import AuthorInformation from "../Service/AuthorInformtion";
import { AuProp } from "../Service/AuthorProp";

const HomePage = () => {
  const [authors, setAuthors] = useState<AuProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const authorData = await AuthorInformation();
      setAuthors(authorData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="homeAuthor">
        <Box>
          <Postbutton />
        </Box>
        <h1>Authors</h1>
        <Grid container spacing={2}>
          {authors.map((author) => (
            <Grid item xs={3} key={author.id}>
              <CardButton authors={[author]} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
