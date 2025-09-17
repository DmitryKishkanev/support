import { Formik, Field, ErrorMessage } from 'formik';
import {
  FormContainer,
  ErrorText,
} from 'components/LoginForm/LoginForm.styled';
import { object, string } from 'yup';

const schema = object({
  login: string().required(),
  password: string().min(6).max(16).required(),
});

const initialValue = {
  login: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <h1>Login form</h1>
        <label htmlFor="login">
          <span>Login</span>
          <Field type="text" name="login" />
          <ErrorMessage name="login" component={ErrorText} />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component={ErrorText} />
        </label>
        <button type="submit">Submit</button>
      </FormContainer>
    </Formik>
  );
};

export default LoginForm;
