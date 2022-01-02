import {useLoaderData} from 'remix';

/* styles */
import messageBubble from '../../stories/components/MessageBubble/messageBubble.css';
import action from '../../stories/components/Action/action.css';
import avatar from '../../stories/components/Avatar/avatar.css';
import reply from '../../stories/components/Reply/reply.css';
import vote from '../../stories/components/Vote/vote.css';
import replies from '../styles/index.css';

/* components */

import {MessageBubble, Reply, type Message} from '../components/';

import {data as result} from '../../data';

export const loader = async () => {
	const data = await Promise.resolve(result);
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
		<div className='Container'>
			<div className='Messages'>
				{data?.messages.map((message: Message) => (
					<div style={{marginTop: '1rem'}} key={message.id}>
						<MessageBubble isMobile={false} message={message} currentUser={data.currentUser} />
						<div className='Replies'>
							{message?.replies &&
								message.replies.map((message: Message) => (
									<div style={{marginTop: '1rem', width: '500px'}} key={message.id}>
										<MessageBubble isMobile={false} message={message} currentUser={data.currentUser} />
									</div>
								))}
						</div>
					</div>
				))}
				<div style={{marginTop: '1.5rem'}}>
					<Reply isMobile={false} user={{name: data.currentUser.handle, profile_pic: data.currentUser.image}} />
				</div>
			</div>
		</div>
	);
}
