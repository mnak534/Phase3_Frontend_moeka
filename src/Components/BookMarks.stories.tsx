// Button.stories.ts|tsx

import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BookMarks } from './BookMarks';

export default {
  title: 'BookMarks',
  component: BookMarks,
} as ComponentMeta<typeof BookMarks>;

export const Primary: ComponentStory<typeof BookMarks> = () => <BookMarks/>;
