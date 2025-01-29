import { CardProps } from "../utils/component.types";

/**
 * A reusable card component.
 *
 * @param title - The title displayed at the top of the card.
 * @param content - The main content of the card.
 * @param footer - The footer section of the card, typically used for actions or additional details.
 *
 * @returns A card element containing the title, content, and footer.
 */
const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default Card;
