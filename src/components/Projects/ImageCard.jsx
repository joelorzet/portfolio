import { Card, Text } from '@nextui-org/react';

export default function ImageCard({ title, url }) {
	return (
		<Card variant='bordered' css={{ w: '100%', mh: '380px', p: 0 }}>
			<Card.Header css={{ zIndex: 1, top: 0, bg: '$accents1' }}>
				<Text b>{title}</Text>
			</Card.Header>
			<Card.Body css={{ width: '100%', p: 0 }}>
				<Card.Image src={url || ''} alt='img' objectFit='cover' width='100%' />
			</Card.Body>
		</Card>
	);
}
