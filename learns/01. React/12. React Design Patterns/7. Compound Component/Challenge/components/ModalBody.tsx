import { ReactNode } from "react";

/**
 * Renders the body section of a modal.
 *
 * @param children - The content to be displayed in the modal body. Typically includes descriptive text or additional details.
 *
 * @returns A styled container displaying the modal body content.
 *
 * @example
 * <ModalBody>This is the body of the modal.</ModalBody>
 */
const ModalBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-2">
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
};

export default ModalBody;
