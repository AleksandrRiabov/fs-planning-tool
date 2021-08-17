import "./Modal.css";

const Modal = ({children}) => {
   return (
      <div className="modal">
         <div className="content">
            {children}
         </div>
      </div>
   )
}

export default Modal;