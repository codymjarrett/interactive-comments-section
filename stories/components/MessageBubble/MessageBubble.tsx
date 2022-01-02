import React, {useState} from 'react';
import moment from 'moment';

import styles from './messageBubble.css';

import Avatar from '../Avatar/Avatar';
import Vote from '../Vote/Vote';
import Action from '../Action/Action';

interface Message {
	handle: string;
	createdAt: number;
	text: string;
	image: string;
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

export function links() {
	return [{rel: 'stylesheet', href: styles}];
}

const MessageBubble = (props: MessageBubbleProps) => {
	const {isMobile, message} = props;

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
		return (
			<div className={`MessageBubble ${classNames}`}>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<div style={{marginRight: '2rem'}}>
						<Vote isMobile={isMobile} />
					</div>
					<div>
						<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
							<div className={`MessageBubble__header ${classNames}`}>
								<Avatar imageSrc={message.image} alt='some girl' />
								<Handle handle={message.handle} />
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
				<Vote isMobile={isMobile} />
				<Action OnClick={() => console.log('should reply')} />
			</div>
		</div>
	);
};

export default MessageBubble;
