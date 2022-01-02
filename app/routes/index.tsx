import {useLoaderData} from 'remix';
import {user, message} from '../../prisma/client.js';

/* styles */
import messageBubble from '../../stories/components/MessageBubble/messageBubble.css';
import action from '../../stories/components/Action/action.css';
import avatar from '../../stories/components/Avatar/avatar.css';
import reply from '../../stories/components/Reply/reply.css';
import vote from '../../stories/components/Vote/vote.css';

/* components */

import {MessageBubble} from '../components/';

export const loader = async () => {
	const messages = await message.findMany();
	const _users = await user.findMany();

	const formattedData = messages.reduce((acc, current) => {
		const {username, image} = _users.find((user) => user.id === current.userId);
		acc.push({
			handle: username,

			createdAt: current.createdAt,
			text: current.content,
			image,
		});

		return acc;
	}, []);

	return formattedData;
};

export function links() {
	const stylesheets = [messageBubble, action, avatar, reply, vote];

	return stylesheets.map((stylesheet) => ({rel: 'stylesheet', href: stylesheet}));
}

export default function Index() {
	const data = useLoaderData();
	console.log(data);

	return (
		<div>
			{data.map((message) => (
				<MessageBubble isMobile={false} message={message} />
			))}
		</div>
	);
}
