import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { FormContainer } from 'components/AsyncReduxPhonebook/ContactForm/ContactForm.styled';
import { addContact } from '@/redux/asyncReduxPhonebook/phonebookOperations';
import { selectContacts } from '@/redux/asyncReduxPhonebook/selectors';

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

    // const promise = dispatch(addContact(newContact));
    dispatch(addContact(newContact));

    resetForm();

    // return () => {
    //   promise.abort();
    //   console.log(
    //     'AsyncReduxPhonebook: Отмена запроса при размонтировании компонента',
    //   );
    // };
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
