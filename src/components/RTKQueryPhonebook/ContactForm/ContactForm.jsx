import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import { nanoid } from 'nanoid';
import { FormContainer } from 'components/RTKQueryPhonebook/ContactForm/ContactForm.styled';
import { useFetchContactsQuery } from '@/redux/rtkQueryPhonebook';
import { useCreateContactMutation } from '@/redux/rtkQueryPhonebook';

const schema = object({
  name: string().required(),
  phone: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      // id: nanoid(),
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

    createContact(newContact);

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
          <Field type="tel" name="phone" required />
          <ErrorMessage name="phone" />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="phonebook__button"
        >
          {isLoading && '☎'} Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
