import styled from 'styled-components'

import useStore from '../hooks/useStore'

import NewPlaylist from './NewPlaylist'

import AddASong from './AddASong'

const modals = {
  '': null,
  newPlaylist: NewPlaylist,
  addASong: AddASong
}

function ModalContainer({ className }) {
  const modal = useStore(store => store.modal)
  const closeModal = useStore(store => store.closeModal)

  const Modal = modals[modal]

  if (!modal) return null

  return (
    <div className={`modal-container ${className}`}>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <Modal />
      </div>
    </div>
  )
}

export default styled(ModalContainer)`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;

  background-color: #00000040;

  z-index: 100;

  overflow: auto;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }

  .close-modal {
    position: absolute;

    top: -10px;
    right: -10px;

    border: solid 1px #00000000;
    background-color: #00000000;

    width: 40px;
    height: 40px;

    font-size: 1.5rem;
  }
`
