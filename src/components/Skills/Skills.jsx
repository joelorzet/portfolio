import { Container, Text, Divider, Card, Grid, Progress, Col, Badge } from '@nextui-org/react';
import React from 'react';
import { softSkills } from './softSkills.js';

function Skills() {
	return (
		<Container fluid css={{ mt: 2, w: '90%' }}>
			<Divider y={1} />
			<Text weight='extrabold' color='inherit' h3 size={55}>
				Skills
			</Text>
			<Divider y={1} />

			<Container
				fluid
				css={{
					dflex: 'center',
				}}
			>
				<Grid.Container gap={1} justify='center'>
					<Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
						<Text h2 size={34}>
							Habilidades Técnicas
						</Text>

						<Card css={{ p: 10 }} variant='flat'>
							<Card.Header css={{ jc: 'center' }}>
								<Text css={{ textAlign: 'center', borderBottom: '1px solid $warning' }} h3>
									Frontend / Backend
								</Text>
							</Card.Header>
							<Card.Body>
								<Text h4>React JS / Redux </Text>
								<Progress size='sm' value={50} striped color='warning' />
								<Divider y={1} />
								<Text h4>Material UI / Next UI</Text>
								<Progress size='sm' value={40} striped color='warning' />
								<Divider y={1} />
								<Text h4>Express JS / Node JS</Text>
								<Progress size='sm' value={35} striped color='success' />
								<Divider y={1} />
								<Text h4>Postgres SQL / Sequelize</Text>
								<Progress size='sm' value={20} striped />
							</Card.Body>
							<Card.Footer>
								<Text css={{ fontWeight: 100 }} size='$sm' color='warning'>
									*Las barras de progreso corresponden al tiempo que he dedicado a cada tecnología y no a un
									nivel de conocimiento.
								</Text>
							</Card.Footer>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
						<Text h2 size={34}>
							Habilidades Blandas
						</Text>

						<Card css={{ p: 10, minHeight: 450 }} variant='flat'>
							<Card.Header css={{ jc: 'center' }}>
								<Text css={{ textAlign: 'center', borderBottom: '1px solid $warning' }} h3>
									Skills / Habilidades
								</Text>
							</Card.Header>
							<Card.Body>
								<Col css={{ textAlign: 'center' }}>
									{softSkills.map((skill) => (
										<Badge
											css={{ bg: '$warningLightContrast', color: '$accents0', m: 4 }}
											size='lg'
											key={skill.id}
										>
											{skill.title}
										</Badge>
									))}
								</Col>
							</Card.Body>
							<Card.Footer>
								<Text css={{ fontWeight: 100 }} size='$xs' color='warning'></Text>
							</Card.Footer>
						</Card>
					</Grid>
				</Grid.Container>
			</Container>
		</Container>
	);
}

export default Skills;
