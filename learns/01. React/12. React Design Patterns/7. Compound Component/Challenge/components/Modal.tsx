import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { ReactNode } from "react";

/**
 * A container component for creating modals with customizable title, body, and footer sections.
 *
 * @param children - The content of the modal, typically using `Modal.Title`, `Modal.Body`, and `Modal.Footer` for structure.
 *
 * @returns A styled modal with a semi-transparent backdrop and a centered content container.
 *
 * @example
 * <Modal>
 *   <Modal.Title>Modal Heading</Modal.Title>
 *   <Modal.Body>This is the body of the modal.</Modal.Body>
 *   <Modal.Footer>
 *     <button>Cancel</button>
 *     <button>Save</button>
 *   </Modal.Footer>
 * </Modal>
 */
const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[20rem]">{children}</div>
    </div>
  );
};

// Attach compound components
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
