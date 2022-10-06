import { Divider } from '@mui/material';
import { Container, Text, Grid } from '@nextui-org/react';
import React from 'react';
import CardProyect from './CardProyect';
import { proyects } from './proyects.js';

function Projects() {
	return (
		<Container css={{ mt: 2, w: '90%' }}>
			<Divider y={1} />
			<Text weight='extrabold' color='inherit' h3 size={55}>
				Proyectos
			</Text>
			<Divider y={1} />

			<Grid.Container gap={4}>
				{proyects?.map((e) => (
					<Grid xs={12} sm={4} md={4} lg={4}>
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
							key={e.title}
						/>
					</Grid>
				))}
			</Grid.Container>
		</Container>
	);
}

export default Projects;
