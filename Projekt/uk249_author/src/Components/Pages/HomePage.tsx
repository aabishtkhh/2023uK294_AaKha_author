import React, { useEffect, useState } from "react";
import Postbutton from "../Atoms/implement/PostButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardButton from "../Molecules/CardButtons";
import { AuProp } from "../Service/AuthorProp";
import LogOutButton from "../Atoms/done/LogOutButton";
import AuthorService from "../Service/AuthorService";

const HomePage = () => {
  const [authors, setAuthors] = useState<AuProp[]>([]);

  /**
   * The useEffect is a promise-chaining
   * 
   * The .then and .catch is a callbacks:
   * 
   * [] empty dependency / watchlist = empty means itll run/ reload only once
   * 
   */

  useEffect(() => { 
    AuthorService.getlimitedAuthors()
    .then(authordata => setAuthors(authordata))
    .catch(error => console.log(error))
  }, []); 


  return (
    <>
      <div className="homeAuthor">
        <Box>
          <Postbutton />
          <LogOutButton />
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
