import { Container, Grid, Text, Divider } from '@nextui-org/react';
import React from 'react';
import Image from './Image.jsx';

function About() {
	return (
		<Container alignItems='center' css={{ mt: 2, w: '90%' }}>
			<Divider y={1} />
			<Text weight='extrabold' color='inherit' h3 size={55}>
				About
			</Text>
			<Divider y={1} />
			<Grid.Container gap={4} justify='center'>
				<Grid xs={12} sm={12} lg={6} md={6} css={{ fd: 'column' }}>
					<Text color='inherit' weight='semibold' css={{ mb: '2rem' }} size={18}>
						Hola soy Joel, desarrollador FullStack JavaScript apasionado por el Frontend
					</Text>
					<Text color='inherit' css={{ mb: '2rem' }}>
						Soy un apasionado por las nuevas tecnologías y encuentro que me gusta trabajar en equipo. Pongo la
						mejor predisposición en ayudar a compañeros a que completen sus actividades tech y que lleven sus
						capacidades al máximo! En mis tiempos libres utilizo mucho la música y la cocina para despejarme
						mientras se aprovecha un momento en familia!
					</Text>
				</Grid>

				<Grid xs={12} sm={12} lg={6} md={6} justify='center'>
					<Image />
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default About;
