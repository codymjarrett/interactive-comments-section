import React, {useState} from 'react';

import styles from './messageBubble.css';

import Avatar from '../Avatar/Avatar';
import Vote from '../Vote/Vote';
import Action from '../Action/Action';

export interface Message {
	id: number;
	createdAt: string;
	handle: string;
	image: string;
	score: number;
	text: string;
	replyingTo?: string;
	replies?: Message[];
}

interface CurrentUser {
	id: number;
	handle: string;
	image: string;
}

interface MessageBubbleProps {
	isMobile: boolean;
	message: Message;
	currentUser: CurrentUser;
	handleReply: (message: Message) => React.Dispatch<any>;
}

const Handle = ({handle}: {handle: string}) => {
	return <div className='Handle'>{handle}</div>;
};

const Date = ({createdAt}: {createdAt: string}) => {
	return <div className='Date'>{createdAt}</div>;
};

const Identifier = ({handle, currentUser}: {handle: string; currentUser: CurrentUser}) => {
	return <span className='Identifier'>you</span>;
};

export function links() {
	return [{rel: 'stylesheet', href: styles}];
}

const MessageBubble = (props: MessageBubbleProps) => {
	const {isMobile, message, currentUser, handleReply} = props;

	const classes = () => {
		const classes = [];

		if (isMobile) {
			classes.push('isMobile');
		}

		return classes.join(' ');
	};

	const classNames = classes();

	const formatText = (message: Message) => {
		if (message.hasOwnProperty('replyingTo')) {
			return (
				<>
					<span className='highlighted_handle'>@{message.replyingTo}</span> <span>{message.text}</span>
				</>
			);
		}

		return message.text;
	};

	const getActions = (messageBelongsToCurrentUser: boolean) => {
		if (!messageBelongsToCurrentUser) {
			return <Action type='reply' OnClick={() => handleReply(message)} />;
		}

		return (
			<div style={{display: 'flex'}}>
				<Action type='delete' />
				<Action type='edit' />
			</div>
		);
	};

	// not as DRY but better than a bunch of confusing conditional logic

	if (!isMobile) {
		// this is horrible but it works. Should use an ID or something more unique because handles can get misspelled.
		const messageBelongsToCurrentUser = message.handle === currentUser.handle;

		return (
			<div className={`MessageBubble ${classNames}`}>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<div style={{marginRight: '2rem'}}>
						<Vote isMobile={isMobile} score={message.score} />
					</div>
					<div>
						<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
							<div className={`MessageBubble__header ${classNames}`}>
								<Avatar imageSrc={message.image} alt='some girl' />
								<Handle handle={message.handle} />
								{messageBelongsToCurrentUser ? <Identifier handle={message.handle} currentUser={currentUser} /> : null}
								<Date createdAt={message.createdAt} />
							</div>
							<div>{getActions(messageBelongsToCurrentUser)}</div>
						</div>
						<div className='MessageBubble__content'>{formatText(message)}</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`MessageBubble ${classNames}`}>
			<div className={`MessageBubble__header ${classNames}`}>
				<Avatar imageSrc={message.image} alt='some girl' />
				<Handle handle={message.handle} />
				<Date createdAt={message.createdAt} />
			</div>
			<div className='MessageBubble__content'>{message.text}</div>
			<div className='MessageBubble__footer'>
				<Vote isMobile={isMobile} score={message.score} />
				<Action OnClick={() => console.log('should reply')} />
			</div>
		</div>
	);
};

export default MessageBubble;
