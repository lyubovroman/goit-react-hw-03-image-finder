import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { ModalOverlay, ModalWindow } from './Modal.styled';

  const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, largeImage }) {
  


  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalWindow>
        <img src={largeImage} alt="tag" />
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};