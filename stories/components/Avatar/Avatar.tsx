import React from 'react';
import './avatar.css';

interface AvatarProps {
	imageSrc: string;
	alt: string;
}

const Avatar = (props: AvatarProps) => {
	const {alt, imageSrc} = props;
	return (
		<div className='Avatar'>
			<img src={imageSrc} alt={alt} className='Avatar__image' />
		</div>
	);
};

export default Avatar;
