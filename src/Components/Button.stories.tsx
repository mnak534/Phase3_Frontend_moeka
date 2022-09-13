// Button.stories.ts|tsx
import { Meta, Story } from '@storybook/react';
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
export const Primary = Template.bind({})
