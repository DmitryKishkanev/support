import { Component } from 'react';
import MaterialEditorForm from 'components/Materials/MaterialEditorForm';
import * as API from 'components/Materials/Services/api';
import {
  MaterialContainer,
  Loader,
} from 'components/Materials/MaterialRenderComponent/MaterialRenderComponent.styled';
import MaterialList from 'components/Materials/MaterialList';

class MaterialRenderComponent extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  componentDidMount = async () => {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updateMaterial : material,
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <MaterialContainer>
        <h1>Материалы</h1>

        {error && (
          <p>
            Ой! Что-то пошло не так :( перезагрузите страницу и попробуйте ещё
            раз.
          </p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          <Loader>Загружаем материалы</Loader>
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </MaterialContainer>
    );
  }
}

export default MaterialRenderComponent;
