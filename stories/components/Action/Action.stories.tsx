import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Action from './Action';
import Container from '../Container';

export default {
	title: 'Components/Action',
	component: Action,
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => (
	<Container>
		<Action {...args} />
	</Container>
);

export const Edit = Template.bind({});
Edit.args = {
	type: 'edit',
	OnClick: () => null,
};
export const Reply = Template.bind({});
Reply.args = {
	type: 'reply',
	OnClick: () => null,
};
export const Delete = Template.bind({});
Delete.args = {
	type: 'delete',
	OnClick: () => null,
};
