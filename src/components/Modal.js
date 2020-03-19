import React from "react";
import ReactDOM from "react-dom";
import "./styles/Modal.scss";


class Modal extends React.Component {
  
  render(){
 
    if (!this.props.isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal_container">
          <button onClick={this.props.onCloseModal} className="modal_close_button">X</button>
          {this.props.children}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}


export default Modal;
