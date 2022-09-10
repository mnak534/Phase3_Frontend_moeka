// Button.stories.ts|tsx
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Button, Props } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick : {action: 'clicked'},
    children: {
      defaultValue: 'DEFAULT TEXT'
    }
  }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

// export const Demo = Template.bind({})
// Demo.play = async ({args, canvasElement}) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByRole('button'));
//   expect(canvas.getByTestId.onClick({})).toBeCalled();
// }
export const Primary = Template.bind({})
