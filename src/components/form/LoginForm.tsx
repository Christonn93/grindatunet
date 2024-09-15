import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogin } from '../../hooks/query/useLogin';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
  const { mutate, isError, error } = useLogin();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        mutate(values);
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <button type="submit">
        logIn
      </button>
      {isError && <div>Error: {error?.message}</div>}
    </form>
  );
};

export default LoginForm;