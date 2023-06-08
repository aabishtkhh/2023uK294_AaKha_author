import React from "react";

export type AuProp = {
    id?: number;
    author_name: string;    
    birth_date : string; // date is having problems due to date itself not having a type
}

function AuthorProp(props: AuProp) {
    

    return (
        <>
        <div>{props.id}</div>
        <div>{props.author_name}</div>
        <div>{props.birth_date}</div>
      </>
      
    );
}

export default AuthorProp;
