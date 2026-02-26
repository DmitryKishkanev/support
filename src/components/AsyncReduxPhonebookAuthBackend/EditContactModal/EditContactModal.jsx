import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  updateContact,
  selectContacts,
} from '@/redux/authBackendAsyncReduxPhonebook';
import { FormContainer } from 'components/AsyncReduxPhonebookAuthBackend/EditContactModal/EditContactModal.styled';

const schema = object({
  name: string().required(),
  number: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const EditContactModal = ({ onClose, contactId }) => {
  const contacts = useSelector(selectContacts);
  //   const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
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

    dispatch(
      updateContact({
        contactId: contactId,
        contact: newContact,
      }),
    );

    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <FormContainer>
          <h2>Edit contact</h2>
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

          <div>
            <button
              type="submit"
              className="phonebook__button"
              disabled={!values.name || !values.number}
            >
              Add
            </button>

            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </FormContainer>
      )}
    </Formik>
  );
};

EditContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default EditContactModal;
