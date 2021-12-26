import React from 'react';
import '../../app/styles/shared.css';

const Container = ({children, bgColor = '--neutral-white'}: {children: React.ReactNode; bgColor?: string}) => {
	return (
		<div style={{position: 'relative', height: '100vh', backgroundColor: `var(${bgColor})`}}>
			<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>{children}</div>
		</div>
	);
};

export default Container;
