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

  // Будем хранить контроллер как свойство экземпляра
  controller = null;

  componentDidMount = async () => {
    this.controller = new AbortController();

    try {
      this.setState({ isLoading: true, error: false });
      const materials = await API.getMaterials(this.controller.signal); //Передаём signal
      this.setState({ materials, isLoading: false });
    } catch (error) {
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        // Запрос отменён — просто игнорируем (axios даёт CanceledError, fetch даёт AbortError)
        return;
      }
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
      console.log('Material: Компонент размонтирован, запрос прерван');
    }
  }

  addMaterial = async values => {
    this.controller = new AbortController();

    try {
      const material = await API.addMaterial(values, this.controller.signal); //Передаём signal
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        // Запрос отменён — просто игнорируем (axios даёт CanceledError, fetch даёт AbortError)
        return;
      }
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    this.controller = new AbortController();

    try {
      await API.deleteMaterial(id, this.controller.signal); //Передаём signal
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        // Запрос отменён — просто игнорируем (axios даёт CanceledError, fetch даёт AbortError)
        return;
      }
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    this.controller = new AbortController();
    try {
      const updateMaterial = await API.updateMaterial(
        fields,
        this.controller.signal,
      );
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updateMaterial : material,
        ),
      }));
    } catch (error) {
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        // Запрос отменён — просто игнорируем (axios даёт CanceledError, fetch даёт AbortError)
        return;
      }
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
