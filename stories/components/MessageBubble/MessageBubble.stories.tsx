import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import MessageBubble from './MessageBubble';

export default {
	title: 'Components/MessageBubble',
	component: MessageBubble,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof MessageBubble>;

const Template: ComponentStory<typeof MessageBubble> = (args) => <MessageBubble {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
	isMobile: false,
	message: {
		handle: 'amyrobson',
		createdAt: '4 days ago',
		text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
		image: '/avatars/image-amyrobson.webp',
		score: 5,
		id: 2,
	},
	currentUser: {
		handle: 'BobbyFlipTables',
		id: 1,
		image: '/avatars/image-juliusomo.webp',
	},
};

export const Mobile = Template.bind({});
Mobile.args = {
	isMobile: true,
	message: {
		handle: 'amyrobson',
		createdAt: '4 days ago',
		text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
		image: '/avatars/image-amyrobson.webp',
		score: 5,
		id: 2,
	},
	currentUser: {
		handle: 'BobbyFlipTables',
		id: 1,
		image: '/avatars/image-juliusomo.webp',
	},
};
