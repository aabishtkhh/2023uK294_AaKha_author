import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ReturnPageButton from "../../Atoms/ReturnPageButton";
import { AuProp } from "../../Service/AuthorProp";
import { Field, ErrorMessage, Formik, Form } from "formik";
import AuthorService from "../../Service/AuthorService";
import { useNavigate, useParams } from "react-router";

const PutAuthor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState<AuProp>();

  useEffect(() => {
    if (!id) {
      return; 
    }

    AuthorService.getAuthorByID(Number(id))
      .then((authordata) => setAuthor(authordata))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {author && author.id !== undefined && (
        <Formik
          initialValues={{
            id: author.id,
            author_name: author.author_name,
            birth_date: author.birth_date,
          }}

          /*
          Validation
          */
          validate={(values) => {
            const errors: { author_name?: string; birth_date?: string } = {};
          
            if (!values.author_name) {
              errors.author_name = "Required";
            }
          
            if (!values.birth_date) {
              errors.birth_date = "Required";             
            }

            if (isNaN(Date.parse(values.birth_date)) //NAN = not a number 
            ) {
              errors.birth_date = "Invalid Birthdate";             
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            if (!author.id) {
              return;
            } 

            AuthorService.putAuthor(Number(author.id), values).then(() => navigate("/author")).catch();
          }}
        >
          
          {({ isSubmitting, isValid }) => (
            <Form>
              <ReturnPageButton />
              <Card
                sx={{
                  maxWidth: 800,
                  margin: "0 auto",
                  padding: 5,
                  height: 500,
                  marginY: 12,
                  textAlign: "left",
                  backgroundColor: "#ABC798",
                }}
              >
                <Typography>
                  <br />
                  id: {author.id}
                  <br />
                </Typography>
                <label htmlFor="author_name">
                  <br />
                  <br />
                  author name:
                  <br />
                </label>
                <Field type="author_name" name="author_name" />
                <ErrorMessage name="author_name" component="div" />
                <label htmlFor="birth_date">
                  <br />
                  <br />
                  birth date:
                  <br />
                </label>
                <Field type="birth_date" name="birth_date" />
                <ErrorMessage name="birth_date" component="div" />
                <br />
                <button className="submitName" type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </button>
              </Card>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default PutAuthor;
