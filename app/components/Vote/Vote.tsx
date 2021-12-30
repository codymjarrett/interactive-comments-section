import React, {useState} from 'react';
import './vote.css';

interface VoteProps {
	isMobile: boolean;
}

const Vote = (props: VoteProps) => {
	const {isMobile} = props;
	const [votes, setVotes] = useState(0);

	const handleUpVote = () => {
		setVotes((votes) => votes + 1);
	};
	const handleDownVote = () => {
		setVotes((votes) => votes - 1);
	};

	const classes = () => {
		const classNames = [];

		if (isMobile) classNames.push('isMobile');

		return classNames.join(' ');
	};

	return (
		<div className={`Votes ${classes()}`}>
			<button onClick={handleUpVote}>
				<img src='/icons/icon-plus.svg' />
			</button>
			<div>{votes}</div>
			<button onClick={handleDownVote}>
				<img src='/icons/icon-minus.svg' />
			</button>
		</div>
	);
};

export default Vote;
