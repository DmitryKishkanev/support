import { Formik, Field } from 'formik';
import { MaterialForm } from 'components/Material/MaterialEditorForm/MaterialEditorForm.styled';

const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      <MaterialForm>
        <label>
          <span> Описание</span>
          <Field name="title" type="text" />
        </label>

        <label>
          <span> Ссылка</span>
          <Field name="link" type="text" />
        </label>

        <button type="submit">Добавить </button>
      </MaterialForm>
    </Formik>
  );
};

export default MaterialEditorForm;
