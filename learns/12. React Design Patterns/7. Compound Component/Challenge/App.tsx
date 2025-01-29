import { useState } from "react";
import Modal from "./components/Modal";

/**
 * Main application component that controls the modal visibility.
 *
 * It renders a button to open the modal, and conditionally displays the modal content when `isModalOpen` is `true`.
 *
 * @returns The main app with a button to trigger the modal, and the modal itself containing a title, body, and footer.
 */
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-green-400 text-white rounded-md"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Modal>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Body>This is the body of the modal.</Modal.Body>
          <Modal.Footer>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-white bg-gray-500 rounded-md text-sm"
            >
              Cancel
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-white bg-teal-500 ml-[0.3rem] rounded-md text-sm"
            >
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;
