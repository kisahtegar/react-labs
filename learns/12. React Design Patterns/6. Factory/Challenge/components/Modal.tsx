import { ModalProps } from "../utils/component.types";

/**
 * A reusable modal component.
 *
 * @param header - The header text displayed at the top of the modal.
 * @param content - The main content of the modal.
 * @param footer - The footer section of the modal, typically used for actions or additional details.
 *
 * @returns A modal element containing the header, content, and footer.
 */
const Modal = ({ header, content, footer }: ModalProps) => {
  return (
    <div className="modal">
      <h2>{header}</h2>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default Modal;
