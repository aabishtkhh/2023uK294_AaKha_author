import { Routes, Route } from "react-router-dom";
// Pages:
import HomePage from "./Components/Pages/HomePage";
import DetailsAuth from "./Components/Pages/CRUD/GetAuthor";
import Registration from "./Components/Pages/Registration";
import PostAuthor from "./Components/Pages/CRUD/PostAuthor";
import PutAuthor from "./Components/Pages/CRUD/PutAuthor";

function App() {

  return (
    <Routes>
      <Route path="/author" element={<HomePage />} />
      <Route path="/author/:id" element={<DetailsAuth/>} />
      <Route path="/" element={<Registration />} />
      <Route path="/author/create-author/" element={<PostAuthor/>} /> 
      <Route path="/author/update-author/:id" element={<PutAuthor />} />
    </Routes>
  );
}

export default App;
