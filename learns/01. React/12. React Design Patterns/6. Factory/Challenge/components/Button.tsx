import { ButtonProps } from "../utils/component.types";

/**
 * A reusable button component.
 *
 * @param label - The label displayed on the button.
 * @param onClick - The callback function triggered when the button is clicked.
 * @param disabled - Indicates whether the button is disabled.
 *
 * @returns A button element with the specified label, click handler, and disabled state.
 */
const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
