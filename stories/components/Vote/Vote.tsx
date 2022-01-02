import React, {useState} from 'react';
import './vote.css';

const Vote = ({
	isMobile,
	// I really hate this but I had to do it.
	plusAsset = '/assets/icons/icon-plus.svg',
	minusAsset = '/assets/icons/icon-minus.svg',
	score = 0,
}: {
	isMobile: boolean;
	plusAsset?: string;
	minusAsset?: string;
	score: number;
}) => {
	const [votes, setVotes] = useState(score);

	// React.useEffect(() => {
	// 	setVotes(score)
	// }, [score])

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
				<img src={plusAsset} alt='increase' />
			</button>
			<div>{votes}</div>
			<button onClick={handleDownVote}>
				<img src={minusAsset} alt='decrease' />
			</button>
		</div>
	);
};

export default Vote;
