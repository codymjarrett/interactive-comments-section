import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Action from './Action';

export default {
	title: 'Components/Action',
	component: Action,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Edit = Template.bind({});
Edit.args = {
	type: 'edit',
	OnClick: () => null,
	replyAsset: '/icons/icon-reply.svg',
	editAsset: '/icons/icon-edit.svg',
	deleteAsset: '/icons/icon-delete.svg',
};
export const Reply = Template.bind({});
Reply.args = {
	type: 'reply',
	OnClick: () => null,
	replyAsset: '/icons/icon-reply.svg',
	editAsset: '/icons/icon-edit.svg',
	deleteAsset: '/icons/icon-delete.svg',
};
export const Delete = Template.bind({});
Delete.args = {
	type: 'delete',
	OnClick: () => null,
	replyAsset: '/icons/icon-reply.svg',
	editAsset: '/icons/icon-edit.svg',
	deleteAsset: '/icons/icon-delete.svg',
};
