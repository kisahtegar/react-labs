import ComponentFactory, { ComponentConfig } from "./utils/ComponentFactory";

/**
 * Configuration for a Button component.
 *
 * @type {ComponentConfig}
 * @property {"button"} type - Specifies that a Button component should be created.
 * @property {ButtonProps} props - The props for the Button component.
 */
const buttonConfig: ComponentConfig = {
  type: "button",
  props: {
    label: "Click Me",
    onClick: () => alert("Clicked"),
    disabled: false,
  },
};

/**
 * Configuration for a Card component.
 *
 * @type {ComponentConfig}
 * @property {"card"} type - Specifies that a Card component should be created.
 * @property {CardProps} props - The props for the Card component.
 */
const cardConfig: ComponentConfig = {
  type: "card",
  props: {
    title: "Card Title",
    content: "Some content here.",
    footer: "Footer",
  },
};

/**
 * The main application component.
 *
 * @returns A React component that renders a Button and a Card using the ComponentFactory.
 *
 * @example
 * // Renders a Button with "Click Me" label and a Card with "Card Title".
 * <App />
 */
const App = () => {
  return (
    <div>
      {ComponentFactory(buttonConfig)}
      {ComponentFactory(cardConfig)}
    </div>
  );
};

export default App;
