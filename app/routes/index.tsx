import React from 'react';
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

import {data, type Data} from '../../data';

export const loader = async () => {
	const result = await Promise.resolve(data);
	return result;
};

export function links() {
	const stylesheets = [messageBubble, action, avatar, reply, vote, replies];

	return stylesheets.map((stylesheet) => ({rel: 'stylesheet', href: stylesheet}));
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'REPLY': {
			const repliedToMessage = action.payload;
			const parentId = action.payload?.parentId;
			console.log('parentId', parentId);

			if (parentId) {
				let newState = state;

				const newMessagesState = newState.messages.map((message) => {
					if (message.id === parentId) {
						message.replies.push({
							createdAt: '2 days ago',
							handle: 'juliusomo',
							id: 9,
							image: '/assets/avatars/image-juliusomo.webp',
							parentId,
							replyingTo: repliedToMessage.handle,
							// score: 2,
							text: action.payload.text,
						});
					}
				});

				newState = {
					...newState,
					newMessagesState,
				};
				// repliedToMessage.replies;
				return {
					...newState,
				};
			}

			// newState.messages.find((message) => message.id === repliedToId);

			return {
				...state,
				text: `@${action.payload.handle}`,
			};
			return state;
		}
		case 'CHANGE_TEXT': {
			return {
				...state,
				text: action.payload,
			};
		}
		default:
			return state;
	}
};

export default function Index() {
	const data = useLoaderData();
	console.log(data);

	const initialState = {
		...data,
		isEditing: false,
		text: '',
	};

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const handleTextChange = (event) => {
		dispatch({type: 'CHANGE_TEXT', payload: event.target.value});
	};

	const handleReply = (message) => {
		dispatch({type: 'REPLY', payload: message});
	};

	return (
		<div className='Container'>
			<div className='Messages'>
				{data?.messages.map((message: Message) => (
					<div style={{marginTop: '1rem'}} key={message.id}>
						<MessageBubble
							isMobile={false}
							message={message}
							currentUser={state.currentUser}
							dispatch={dispatch}
							handleReply={handleReply}
						/>
						<div className='Replies'>
							{message?.replies &&
								message.replies.map((message: Message) => (
									<div style={{marginTop: '1rem', width: '500px'}} key={message.id}>
										<MessageBubble
											isMobile={false}
											message={message}
											currentUser={state.currentUser}
											handleReply={handleReply}
										/>
									</div>
								))}
						</div>
					</div>
				))}
				<div style={{marginTop: '1.5rem'}}>
					<Reply
						isMobile={false}
						user={{name: state.currentUser.handle, profile_pic: state.currentUser.image}}
						handleOnchange={handleTextChange}
						text={state.text}
					/>
				</div>
			</div>
		</div>
	);
}
