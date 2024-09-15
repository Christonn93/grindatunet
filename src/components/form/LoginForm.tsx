import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../hooks/query/useLogin";

const validationSchema = Yup.object({
 username: Yup.string().required("Username is required"),
 password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
 const { mutate: login, isError, error } = useLogin();
 const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);

 const formik = useFormik({
  initialValues: {
   username: "",
   password: "",
  },
  validationSchema,
  onSubmit: async (values) => {
   try {
    login(values);
   } catch (error) {
    console.error("Login error:", error);
    // If login fails, show registration prompt or handle accordingly
    setShowRegisterPrompt(true);
   }
  },
 });

 return (
  <div>
   <form onSubmit={formik.handleSubmit}>
    <div>
     <label htmlFor="username">Username</label>
     <input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
     {formik.errors.username && formik.touched.username && <div>{formik.errors.username}</div>}
    </div>
    <div>
     <label htmlFor="password">Password</label>
     <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
     {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
    </div>
    <button type="submit">Login</button>
   </form>
   {isError && <div>Login failed: {error?.message}</div>}
   {showRegisterPrompt && (
    <div>
     <p>Registration failed. Would you like to register?</p>
     {/* Implement registration form or redirect to registration page */}
    </div>
   )}
  </div>
 );
};

export default LoginForm;
