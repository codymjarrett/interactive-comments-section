import React from 'react';
import './action.css';

const Action = ({
	type,
	OnClick,
	// this is really stupid and i'm sure there's an easier way
	replyAsset = '/assets/icons/icon-reply.svg',
	editAsset = '/assets/icons/icon-edit.svg',
	deleteAsset = '/assets/icons/icon-delete.svg',
}: {
	type?: 'edit' | 'reply' | 'delete';
	OnClick: () => void;
	replyAsset?: string;
	editAsset?: string;
	deleteAsset?: string;
}) => {
	let actionProps;

	const determineActionProps = (action: 'edit' | 'reply' | 'delete') => {
		switch (action) {
			case 'edit': {
				return {
					imgSrc: editAsset,
					alt: 'edit',
					text: 'Edit',
				};
			}

			case 'delete': {
				return {
					imgSrc: deleteAsset,
					alt: 'delete',
					text: 'Delete',
				};
			}
			case 'reply':
			default: {
				return {
					imgSrc: replyAsset,
					alt: 'reply',
					text: 'Reply',
				};
			}
		}
	};

	if (type) {
		actionProps = determineActionProps(type);
	}

	return (
		<button className={`Action ${type ?? 'reply'}`} onClick={OnClick}>
			<img src={actionProps?.imgSrc ?? replyAsset} alt={actionProps?.alt ?? 'reply'} />
			<span className='text'>{actionProps?.text ?? 'Reply'}</span>
		</button>
	);
};

export default Action;
