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
	const {isMobile, message, currentUser} = props;

	const classes = () => {
		const classes = [];

		if (isMobile) {
			classes.push('isMobile');
		}

		return classes.join(' ');
	};

	const classNames = classes();

	// not as DRY but better than a bunch of confusing conditional logic

	if (!isMobile) {
		const shouldShowIdentifier = message.handle === currentUser.handle;

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
								{shouldShowIdentifier ? <Identifier handle={message.handle} currentUser={currentUser} /> : null}
								<Date createdAt={message.createdAt} />
							</div>
							<div>
								<Action OnClick={() => console.log('should reply')} />
							</div>
						</div>
						<div className='MessageBubble__content'>{message.text}</div>
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
