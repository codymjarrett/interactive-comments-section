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
	handleOnchange: (event: Event) => void;
	text: string;
}

const Button = () => {
	return <button className='Reply__button'>Reply</button>;
};

const Input = ({
	text,
	handleOnchange,
}: {
	text: string;
	handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<textarea
			className='Reply__input'
			placeholder='Add a comment...'
			// not sure what's going on here. I'll fix it later.
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnchange(e)}
			value={text}
		/>
	);
};
const Reply = (props: ReplyProps) => {
	const {isMobile, user, text, handleOnchange} = props;
	return (
		<div className='Reply'>
			<div style={{display: 'flex'}}>
				<Avatar imageSrc={user.profile_pic} alt={user.name} />
				<Input text={text} handleOnchange={handleOnchange} />
				<Button />
			</div>
		</div>
	);
};

export default Reply;
