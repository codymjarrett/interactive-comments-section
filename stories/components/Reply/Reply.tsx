import React, {useState} from 'react';

import Avatar from '../Avatar/Avatar';

import './reply.css';

interface User {
	name: string;
	profile_pic: string;
}

interface ReplyProps {
	isMobile: boolean;
	user: User;
}

const Button = () => {
	return <button className='Reply__button'>Reply</button>;
};

const Input = () => {
	return <textarea className='Reply__input' />;
};
const Reply = (props: ReplyProps) => {
	const {isMobile, user} = props;
	return (
		<div className='Reply'>
			<div style={{display: 'flex'}}>
				<Avatar imageSrc={user.profile_pic} alt={user.name} />
				<Input />
				<Button />
			</div>
		</div>
	);
};

export default Reply;
