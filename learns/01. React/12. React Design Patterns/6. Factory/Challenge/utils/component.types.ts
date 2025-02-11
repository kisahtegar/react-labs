/**
 * Props for the Modal component.
 *
 * @property header - The header text of the modal.
 * @property content - The main content of the modal.
 * @property footer - The footer text or actions for the modal.
 */
export interface ModalProps {
  header: string;
  content: string;
  footer: string;
}

/**
 * Props for the Card component.
 *
 * @property title - The title displayed on the card.
 * @property content - The main content of the card.
 * @property footer - The footer text or actions for the card.
 */
export interface CardProps {
  title: string;
  content: string;
  footer: string;
}

/**
 * Props for the Button component.
 *
 * @property label - The label displayed on the button.
 * @property onClick - The callback function triggered when the button is clicked.
 * @property disabled - Indicates whether the button is disabled.
 */
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}
