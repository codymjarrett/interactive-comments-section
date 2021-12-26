import React, {useState} from 'react';
import moment from 'moment';

import './messageBubble.css';

import Avatar from '../Avatar/Avatar';
import Vote from '../Vote/Vote';
import Action from '../Action/Action';

interface Message {
	handle: string;
	createdAt: number;
	text: string;
}

interface MessageBubbleProps {
	isMobile: boolean;
	message: Message;
}

const Handle = ({handle}: {handle: string}) => {
	return <div className='Handle'>{handle}</div>;
};

const Date = ({createdAt}: {createdAt: number}) => {
	// will need to figure out this logic once we have the data base set up and starts receiving timestamps
	const a = moment([2021, 0, 25]);
	const b = moment([2021, 0, 29]);

	return <div className='Date'>{a.from(b)}</div>;
};

const MessageBubble = (props: MessageBubbleProps) => {
	const {isMobile, message} = props;

	const classes = () => {
		const classes = [];

		if (isMobile) {
			classes.push('isMobile');
		}

		return classes.join(' ');
	};
	return (
		<div className='MessageBubble'>
			<div className={`MessageBubble__header ${classes()}`}>
				<Avatar imageSrc='/avatars/image-amyrobson.png' alt='some girl' />
				<Handle handle={message.handle} />
				<Date createdAt={message.createdAt} />
			</div>
			<div className='MessageBubble__content'>{message.text}</div>
			<div className='MessageBubble__footer'>
				<Vote isMobile={isMobile} />
				<Action OnClick={() => console.log('should reply')} />
			</div>
		</div>
	);
};

export default MessageBubble;
