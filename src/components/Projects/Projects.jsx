import { Divider } from '@mui/material';
import { Container, Text } from '@nextui-org/react';
import React from 'react';
import CardProyect from './CardProyect';
import { proyects } from './proyects.js';

function Projects() {
	return (
		<Container css={{ mt: 2, w: '90%' }}>
			<Divider y={1} />
			<Text weight='extrabold' color='inherit' h3 size={55}>
				Projectos
			</Text>
			<Divider y={1} />

			<Container css={{ dflex: 'center', fd: 'row', gap: '2rem', mt: '2rem', mb: '2rem' }}>
				{proyects?.map((e) => (
					<CardProyect
						title={e.title}
						subtitle={e.subtitle}
						imageUrl={e.imageUrl}
						imagesUrl={e.imagesUrl}
						description={e.description}
						repository={e.repository}
						deploy={e.deploy}
						contribution={e.contribution}
						tech={e.tech}
					/>
				))}
			</Container>
		</Container>
	);
}

export default Projects;
