import { ReactNode } from "react";

/**
 * Renders the footer section of a modal.
 *
 * @param children - The content to be displayed in the modal footer. Typically includes actions like buttons.
 *
 * @returns A styled container displaying the modal footer content.
 *
 * @example
 * <ModalFooter>
 *   <button>Cancel</button>
 *   <button>Save</button>
 * </ModalFooter>
 */
const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 flex justify-end space-x-2">
      <div>{children}</div>
    </div>
  );
};

export default ModalFooter;
