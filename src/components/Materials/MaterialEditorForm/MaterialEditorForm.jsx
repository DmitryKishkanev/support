import { Formik, Field } from 'formik';
import { MaterialForm } from 'components/Materials/MaterialEditorForm/MaterialEditorForm.styled';

const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <MaterialForm>
          <label>
            <span> Описание</span>
            <Field name="title" type="text" />
          </label>

          <label>
            <span> Ссылка</span>
            <Field name="link" type="text" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Добавить
          </button>
        </MaterialForm>
      )}
    </Formik>
  );
};

export default MaterialEditorForm;
