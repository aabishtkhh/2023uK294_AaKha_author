//CRUD Operationen:
import { defaultAxiosInstance as api } from "./Api";
import { AuProp } from "./AuthorProp";

const AuthorService = { 

  /**
   * in postman + website
   * 
   * getlimitedAuthors limited json array to 20 objects
   * will  be on our main page
   */

  getlimitedAuthors : async () => { 
    const data = await api.get(`/author?_limit=20`);
    return data["data"];
  },

  getAllAuthors : async () => { 
    const data = await api.get(`/author`);
    return data["data"];
  },

  getAuthorByID : async (authorId : number) => {
    const data = await api.get(`/author/${authorId}`);
    return data["data"];
  },

  postAuthor : async (author: AuProp) => {  
    const data = await api.post("author", author); 
    return data["data"];
  },

  putAuthor : async (authorId: number, author: AuProp) => {
    const data = await api.put(`/author/${authorId}`, author); 
    return data["data"];
  },
  
  delAuthor : async (authorId : number) => {
    const response = await api.delete(`/author/${authorId}`);
    return response["data"];
  }

};

export default AuthorService;