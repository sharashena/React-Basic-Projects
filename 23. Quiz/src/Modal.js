import { useGlobalContext } from "./context";

const Modal = () => {
  const { modal, closeModal, correct, questions } = useGlobalContext();
  return (
    <div className={modal ? "modal-container isOpen" : "modal-container"}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          you answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correcrtly{" "}
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
