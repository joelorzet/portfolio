import { Card } from '@nextui-org/react';
import img from './profile.png';

function Photo() {
	return (
		<Card css={{ mw: 375 }}>
			<Card.Image src={img} alt='Joel Orzet' />
		</Card>
	);
}

export default Photo;
