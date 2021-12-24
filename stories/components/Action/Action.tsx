import React from 'react';
import './action.css';

interface ActionProps {
	type: 'edit' | 'reply' | 'delete';
	OnClick: () => void;
}

const determineActionProps = (action: 'edit' | 'reply' | 'delete') => {
	switch (action) {
		case 'edit': {
			return {
				imgSrc: '/icons/icon-edit.svg',
				alt: 'edit',
				text: 'Edit',
			};
		}

		case 'delete': {
			return {
				imgSrc: '/icons/icon-delete.svg',
				alt: 'delete',
				text: 'Delete',
			};
		}
		case 'reply':
		default: {
			return {
				imgSrc: '/icons/icon-reply.svg',
				alt: 'reply',
				text: 'Reply',
			};
		}
	}
};
const Action = (props: ActionProps) => {
	const {type, OnClick} = props;

	const {imgSrc, alt, text} = determineActionProps(type);

	return (
		<button className={`Action ${type}`} onClick={OnClick}>
			<img src={imgSrc} alt={alt} />
			<span>{text}</span>
		</button>
	);
};

export default Action;
