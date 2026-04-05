import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { OpenBtn } from 'components/Modal/Modal/Modal.styled';
import Clock from 'components/Clock';
import {
  TimeFaceContainer,
  TimeFaceTitle,
} from 'components/Modal/ModalApp/ModalApp.styled';

export default class ModalApp extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <TimeFaceContainer>
        <TimeFaceTitle>Time face</TimeFaceTitle>
        <OpenBtn type="button" onClick={this.toggleModal}>
          Open
        </OpenBtn>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <>
              <h1>Контент модалки</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                omnis rem quam numquam iusto ipsa, laudantium expedita quo fuga!
                Doloribus ad accusantium atque ullam, accusamus esse ipsam
                tempore odit soluta nulla dolorum quidem voluptatem et cumque
                excepturi a incidunt cupiditate suscipit inventore nesciunt
                facere consectetur repudiandae perferendis! Inventore, deleniti
                a.
              </p>
              <Clock />
              <button
                type="button"
                className="Close__btn"
                onClick={this.toggleModal}
              >
                Close
              </button>
            </>
          </Modal>
        )}
      </TimeFaceContainer>
    );
  }
}
