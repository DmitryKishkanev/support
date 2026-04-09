import MaterialEditorForm from '@/components/RTKQueryMaterials/MaterialEditorForm';
import {
  MaterialContainer,
  Loader,
} from './RTKQueryMaterialRenderComponent.styled';
import MaterialList from '@/components/RTKQueryMaterials/MaterialList';
import { useFetchMaterialsQuery } from '@/redux/rtkQueryMaterials';

const RTKQueryMaterialRenderComponent = () => {
  const { data: materials, error, isLoading } = useFetchMaterialsQuery();

  return (
    <MaterialContainer>
      <h1>Материалы</h1>

      {error && (
        <p>
          Ой! Что-то пошло не так 🙁 перезагрузите страницу и попробуйте ещё
          раз.
        </p>
      )}

      <MaterialEditorForm />

      {isLoading ? (
        <Loader>Загружаем материалы</Loader>
      ) : (
        <MaterialList items={materials} />
      )}
    </MaterialContainer>
  );
};

export default RTKQueryMaterialRenderComponent;
