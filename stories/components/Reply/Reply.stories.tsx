import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Reply from './Reply';

export default {
	title: 'Components/Reply',
	component: Reply,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = (args) => <Reply {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
	isMobile: false,
	user: {
		profile_pic: '/avatars/image-maxblagun.webp',
		name: 'Somebody name',
	},
};

export const Mobile = Template.bind({});
Mobile.args = {
	isMobile: true,
	user: {
		profile_pic: '/avatars/image-maxblagun.webp',
		name: 'Somebody name',
	},
};
