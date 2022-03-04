import { useState } from 'react'
import Modal from './Modal'

const style = {
  container: {
    position: 'relative',
    width: '1000px',
    margin: '0 auto',
    zindex: '1',
  },
  content: {
    position: 'relative',
    backgroundColor: 'red',
    zindex: '2',
    padding: '20px',
  },
}

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div style={style.container}>
      <div>
        <button style={style.btn} onClick={() => setOpen(true)}>
          open model
        </button>
        <Modal state={open} onClose={() => setOpen(false)}>
          Hello I am Modal
        </Modal>
      </div>
      <div style={style.content}>Open Content</div>
    </div>
  )
}

export default App
