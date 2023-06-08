import Card from "@mui/material/Card";
import ReturnPageButton from "../../Atoms/done/ReturnPageButton";
import { Field, ErrorMessage, Formik, Form } from "formik";
import AuthorService from "../../Service/AuthorService";
import { useNavigate } from "react-router";

const PostAuthor = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Formik
        initialValues={{
          author_name: "",
          birth_date: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          
          AuthorService.postAuthor(values).then(response => (navigate(`/author/${response.id}`,{replace:true} ))).catch(); //not sure if it works
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
              }}
            >
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
                <button type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </button>
            </Card>
          </Form>
        )}
      </Formik> 
    </>
  );
};

export default PostAuthor;

