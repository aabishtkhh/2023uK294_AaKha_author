import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// Pages:
import HomePage from "./Components/Pages/HomePage";
import DetailsAuth from "./Components/Pages/DetailsAuth";
import Registration from "./Components/Pages/Registration";
import AuthorInformation from "./Components/Service/AuthorInformtion";
import { AuProp } from "./Components/Service/AuthorProp";

function App() {

  const [authors, setAuthors] = useState<AuProp[]>([]); //for DetailsAuth -> Json Array

  useEffect(() => {
    const fetchData = async () => {
      const authorData = await AuthorInformation();
      setAuthors(authorData);
    };

    fetchData();
  }, []);
  
  return (
    <Routes>
      <Route path="/author" element={<HomePage />} />
      <Route path="/author/:id" element={<DetailsAuth authors={authors} />} />
      <Route path="/sign-up" element={<Registration />} />
    </Routes>
  );
}

export default App;
