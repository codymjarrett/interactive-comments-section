import {useLoaderData} from 'remix';

/* styles */
import messageBubble from '../../stories/components/MessageBubble/messageBubble.css';
import action from '../../stories/components/Action/action.css';
import avatar from '../../stories/components/Avatar/avatar.css';
import reply from '../../stories/components/Reply/reply.css';
import vote from '../../stories/components/Vote/vote.css';
import replies from '../styles/index.css';

/* components */

import {MessageBubble, type Message} from '../components/';

import {MessageData} from '../../data';

export const loader = async () => {
	const data = await Promise.resolve(MessageData);
	return data;
};

export function links() {
	const stylesheets = [messageBubble, action, avatar, reply, vote, replies];

	return stylesheets.map((stylesheet) => ({rel: 'stylesheet', href: stylesheet}));
}

export default function Index() {
	const data = useLoaderData();
	console.log(data);

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
			}}
		>
			<div className='Messages'>
				{data.map((message: Message) => (
					<div style={{marginTop: '1rem'}}>
						<MessageBubble isMobile={false} message={message} />
						<div className='Replies'>
							{message?.replies &&
								message.replies.map((message: Message) => (
									<div style={{marginTop: '1rem', width: '500px'}}>
										<MessageBubble isMobile={false} message={message} />
									</div>
								))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
