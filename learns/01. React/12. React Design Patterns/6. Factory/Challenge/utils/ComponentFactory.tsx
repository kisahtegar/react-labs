import { ButtonProps, CardProps, ModalProps } from "./component.types";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";

/**
 * Configuration for creating a component dynamically.
 *
 * @typedef ComponentConfig
 * @property {"button"} type - Specifies that a Button component should be created.
 * @property {ButtonProps} props - The props for the Button component.
 *
 * @property {"card"} type - Specifies that a Card component should be created.
 * @property {CardProps} props - The props for the Card component.
 *
 * @property {"modal"} type - Specifies that a Modal component should be created.
 * @property {ModalProps} props - The props for the Modal component.
 */
export type ComponentConfig =
  | { type: "button"; props: ButtonProps }
  | { type: "card"; props: CardProps }
  | { type: "modal"; props: ModalProps };

/**
 * Factory function to dynamically create components based on the provided configuration.
 *
 * @param config - The configuration object specifying the component type and props.
 * @returns A React component of the specified type with the provided props.
 *
 * @throws Will throw an error if the component type is unknown.
 *
 * @example
 * const buttonConfig: ComponentConfig = {
 *   type: "button",
 *   props: { label: "Click Me", onClick: () => alert("Clicked!"), disabled: false },
 * };
 * const ButtonComponent = ComponentFactory(buttonConfig);
 *
 * @example
 * const cardConfig: ComponentConfig = {
 *   type: "card",
 *   props: { title: "Card Title", content: "Card Content", footer: "Footer Text" },
 * };
 * const CardComponent = ComponentFactory(cardConfig);
 */
function ComponentFactory(config: ComponentConfig) {
  switch (config.type) {
    case "button":
      return <Button {...config.props} />;
    case "card":
      return <Card {...config.props} />;
    case "modal":
      return <Modal {...config.props} />;
    default:
      throw new Error("Unknown component type");
  }
}

export default ComponentFactory;
