import { Formik, Field } from 'formik';
import { MaterialForm } from 'components/RTKQueryMaterials/MaterialEditorForm/MaterialEditorForm.styled';
import {
  useFetchMaterialsQuery,
  useCreateMaterialMutation,
} from '@/redux/rtkQueryMaterials';

const initialValue = {
  title: '',
  link: '',
};

const MaterialEditorForm = () => {
  const { data: materials } = useFetchMaterialsQuery();
  const [createMaterial, { isLoading }] = useCreateMaterialMutation();

  const handleSubmit = (values, { resetForm }) => {
    const newMaterial = {
      title: values.title,
      link: values.link,
    };

    const isNamePresent = materials.some(
      material =>
        material.title.toLowerCase() === newMaterial.title.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newMaterial.title}" is already in materials `);
      return;
    }

    createMaterial(newMaterial);

    resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <MaterialForm>
        <label>
          <span> Описание</span>
          <Field name="title" type="text" />
        </label>

        <label>
          <span> Ссылка</span>
          <Field name="link" type="text" />
        </label>

        <button type="submit" disabled={isLoading}>
          {isLoading && '📜'} Добавить
        </button>
      </MaterialForm>
    </Formik>
  );
};

export default MaterialEditorForm;
