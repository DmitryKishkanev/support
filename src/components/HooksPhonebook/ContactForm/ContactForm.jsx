import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormContainer } from 'components/HooksPhonebook/ContactForm/ContactForm.styled';

const schema = object({
  name: string().required(),
  number: string().min(7).max(9).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = ({ handleAddContact }) => {
  const onSubmit = (values, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    handleAddContact(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <label>
          <span>Name</span>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>

        <label>
          <span>Number</span>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
