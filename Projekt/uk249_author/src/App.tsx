import React from 'react';
import logo from './logo.svg';
import AuthorInformtion from "./Components/Service/AuthorInformtion";
import Postbutton from "./Components/Atoms/PostButton";
import CardButton from './Components/Atoms/CardButtons';


function App() {
  return (
        <><Postbutton />
        <CardButton></CardButton>
        <AuthorInformtion author={[]} />

        </>      
  );
}

export default App;
