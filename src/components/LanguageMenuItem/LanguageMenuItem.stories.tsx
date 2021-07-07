/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { LanguageMenuItem, LanguageMenuItemProps } from "./LanguageMenuItem";

export default {
  title: "Components/LanguageMenuItem",
  component: LanguageMenuItem,
} as Meta;

/**
 * Defines the Template
 * @param args LanguageMenuItemProps
 * @returns
 */
const Template: Story<LanguageMenuItemProps> = (args) => (
  <LanguageMenuItem {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
