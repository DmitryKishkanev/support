import { Component } from 'react';
import MaterialEditorForm from 'components/Materials/MaterialEditorForm';
import * as API from 'components/Materials/Services/api';
import {
  MaterialContainer,
  Loader,
} from 'components/Materials/MaterialRenderComponent/MaterialRenderComponent.styled';

class MaterialRenderComponent extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <MaterialContainer>
        <h1>Материалы</h1>
        {isLoading && <Loader>LOADING</Loader>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
      </MaterialContainer>
    );
  }
}

export default MaterialRenderComponent;
