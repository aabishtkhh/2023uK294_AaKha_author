//CRUD Operationen:
import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
// import AuthorInformtion from "./AuthorInformtion";


// WHAT WE NEED:
// GET    /posts
// GET    /posts/1
// POST   /posts
// PUT    /posts/1
// DELETE /posts/1

const AuthorService = (api: AxiosInstance = defaultAxiosInstance) => ({

  getAuthor : async () => {
    const data = await api.get("");
    return data["data"][0]["url"];
  },


  postAuthor : async () => {
    const data = await api.post("search"); //on click button -> postButton
    return data["data"][0]["url"];
  },

  
  putAuthor : async () => {
    const data = await api.put("search"); //on click button 
    return data["data"][0]["url"];
  },

  
  delAuthor : async () => {
    const data = await api.delete("search"); //on click button 
    return data["data"][0]["url"];
  },

});

export default AuthorService;
