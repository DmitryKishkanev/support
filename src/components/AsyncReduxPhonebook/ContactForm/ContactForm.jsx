import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer } from 'components/AsyncReduxPhonebook/ContactForm/ContactForm.styled';
import { addContact, selectContacts } from '@/redux/asyncReduxPhonebook';

const schema = object({
  name: string().required(),
  phone: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const promiseRef = useRef(null);

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      phone: values.phone,
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
          <Field type="tel" name="phone" required />
          <ErrorMessage name="phone" />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
