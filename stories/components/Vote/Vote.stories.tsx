import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Vote from './Vote';

export default {
	title: 'Components/Vote',
	component: Vote,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Vote>;

const Template: ComponentStory<typeof Vote> = (args) => <Vote {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
	isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
	isMobile: true,
};
