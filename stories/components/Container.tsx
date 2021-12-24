import React from 'react';

const Container = ({children}: {children: React.ReactNode}) => {
	return (
		<div style={{position: 'relative', height: '100vh'}}>
			<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>{children}</div>
		</div>
	);
};

export default Container;
