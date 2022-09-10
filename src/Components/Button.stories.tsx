// Button.stories.ts|tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, Props } from './Button';
import { action } from '@storybook/addon-actions';


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

export const Default = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
}