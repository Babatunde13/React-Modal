import { useState } from 'react'
import Modal from './Component/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  
  const showModalFunc = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="modal" id="modal">
      {!showModal && <button  className="toggle-button" id="centered-toggle-button" onClick={() => {showModalFunc()}}>Show Modal</button>}
      <Modal show={showModal} onClose={showModalFunc}>
      <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
      </Modal>
    </div>
  );
}

export default App;
