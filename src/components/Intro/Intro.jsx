import { Container, Progress, Spacer, Text } from '@nextui-org/react';
import React from 'react';

function Intro() {
	return (
		<>
			<Container css={{ dflex: 'center', fd: 'column', w: '90%', h: '85vh' }}>
				<Text weight='semibold' color='inherit' h2 size={30}>
					Hola, soy Joel
				</Text>
				<Spacer y={2} />

				<Progress value={100} shadow color='warning' status='primary' size='xs' />

				<Text weight='extrabold' color='warning' h3 size={50} css={{ textAlign: 'center' }}>
					FullStack Web Developer
				</Text>

				<Progress value={100} shadow color='warning' status='primary' size='xs' />

				<Spacer y={2} />

				<Text weight='semibold' color='inherit' h2 size={30}>
					Bienvenidos a mi Portfolio
				</Text>
			</Container>
		</>
	);
}

export default Intro;
