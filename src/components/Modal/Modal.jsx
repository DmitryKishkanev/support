import { Component } from 'react';
import { ModalContainer } from 'components/Modal/Modal.styled';

export default class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ModalContainer className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </ModalContainer>
    );
  }
}
