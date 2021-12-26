import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Avatar from './Avatar';

export default {
	title: 'Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	imageSrc: '/avatars/image-ramsesmiron.webp',
	alt: 'Some guy',
};
