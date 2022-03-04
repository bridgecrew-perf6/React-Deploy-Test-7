import { createPortal } from 'react-dom'

const style = {
  innerModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50px,-50px)',
    zindex: 1000,
    padding: '50px',
    backgroundColor: 'white',
  },
  Modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zindex: 1000,
  },
}

function Modal({ children, state, onClose }) {
  if (!state) return null
  return createPortal(
    <>
      <div style={style.Modal}>
        <div style={style.innerModal}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  )
}

export default Modal
