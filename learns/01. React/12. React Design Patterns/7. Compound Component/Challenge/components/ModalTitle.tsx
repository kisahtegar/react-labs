import { ReactNode } from "react";

/**
 * Renders the title section of a modal.
 *
 * @param children - The content to be displayed as the modal title. Typically, this is a string or JSX.
 *
 * @returns A styled container displaying the modal title.
 *
 * @example
 * <ModalTitle>Modal Heading</ModalTitle>
 */
const ModalTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
    </div>
  );
};

export default ModalTitle;
