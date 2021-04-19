import PropTypes from 'prop-types'
import './modals.css'

const Modal = (props) => {
  if (!props.show) {
    return null
  } 
  return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">{props.children}</div>
        <div className="action">
          <button className="toggle-button" onClick={props.onClose}>Close button</button>
        </div>
      </div>
    )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal