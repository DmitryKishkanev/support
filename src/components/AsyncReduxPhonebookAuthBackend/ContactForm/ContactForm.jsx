import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
// import { nanoid } from 'nanoid';
import { FormContainer } from 'components/AsyncReduxPhonebookAuthBackend/ContactForm/ContactForm.styled';
import {
  addContact,
  selectContacts,
  selectIsLoading,
} from '@/redux/authBackendAsyncReduxPhonebook';

const schema = object({
  name: string().required(),
  number: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const promiseRef = useRef(null);

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      // id: nanoid(),
      name: values.name,
      number: values.number,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    promiseRef.current = dispatch(addContact(newContact));

    // const promise = dispatch(addContact(newContact));
    // dispatch(addContact(newContact));

    resetForm();
  };

  // Для прерывания http - запроса, при размонтировании компонента
  useEffect(() => {
    return () => {
      if (promiseRef.current) {
        promiseRef.current.abort();
        console.log(
          'asyncReduxPhonebook_addContact: Отмена запроса при размонтировании компонента',
        );
      }
    };
  }, []);

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

        <button
          type="submit"
          className="phonebook__button"
          disabled={isLoading}
        >
          {isLoading && '☎'} Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
