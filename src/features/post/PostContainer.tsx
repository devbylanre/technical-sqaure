import { Form, Formik } from "formik";
import Sidebar from "./components/Sidebar";

const initialValues ={}

const validationSchema = {}

const PostContainer = () => {
  return <div className="grid grid-cols-12">
    <Sidebar/>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
    <Form></Form>
  </Formik>
  </div>;
};

export default PostContainer;
