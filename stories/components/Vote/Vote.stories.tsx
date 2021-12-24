import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Vote from './Vote';
import Container from '../Container';

export default {
	title: 'Components/Vote',
	component: Vote,
} as ComponentMeta<typeof Vote>;

const Template: ComponentStory<typeof Vote> = (args) => (
	<Container>
		<Vote {...args} />
	</Container>
);

export const Desktop = Template.bind({});
Desktop.args = {
	isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
	isMobile: true,
};
