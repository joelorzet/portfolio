import { Container, Grid, Text, Button, Link, Row, Badge } from '@nextui-org/react';
import ImageCard from './ImageCard.jsx';

//borderBottom: '10px solid $warning',
export default function ModalDetails({ description, contribution, imagesUrl, deploy, repository, tech }) {
	return (
		<Container
			fluid
			alignContent='center'
			css={{
				boxSizing: 'border-box',
				minHeight: '95vh',
				p: 0,
			}}
		>
			<Grid.Container justify='center' gap={1}>
				<Grid xs={12} css={{ justifyContent: 'center' }}>
					<Text size='$xl' css={{ maxW: 1000 }}>
						{description}
					</Text>
				</Grid>
				<Grid xs={12} css={{ justifyContent: 'center' }}>
					<Text size='$xl' css={{ maxW: 1000 }}>
						{contribution}
					</Text>
				</Grid>
			</Grid.Container>

			<Grid.Container justify='center' gap={1}>
				<Grid xs={6} css={{ justifyContent: 'space-evenly' }}>
					{repository ? (
						<Link color='warning' href={repository} target='_blank'>
							<Button size='lg' color='warning' bordered css={{ minWidth: 160, mr: 5 }}>
								Repository
							</Button>
						</Link>
					) : (
						<Button disabled size='lg' bordered css={{ minWidth: 160, ml: 5 }}>
							Repository
						</Button>
					)}
					{deploy ? (
						<Link color='warning' href={deploy} target='_blank'>
							<Button size='lg' color='warning' bordered css={{ minWidth: 160, ml: 5 }}>
								Deploy
							</Button>
						</Link>
					) : (
						<Button disabled size='lg' bordered css={{ minWidth: 160, ml: 5 }}>
							Deploy
						</Button>
					)}
				</Grid>
			</Grid.Container>

			<Grid.Container css={{ mt: 30, mb: 30 }}>
				<Grid xs={12} css={{ justifyContent: 'center', flexDirection: 'column' }}>
					<Text size={30} align='center' weight='bold' transform='uppercase' color='inherit'>
						TECH SKILLS
					</Text>
					<Row wrap='wrap' justify='center' align='center'>
						{tech?.map((t, i) => (
							<Badge key={i} css={{ bg: '$warningLightContrast', color: '$accents0', m: 1 }}>
								{t}
							</Badge>
						))}
					</Row>
				</Grid>
			</Grid.Container>

			<Grid.Container gap={2} justify='center'>
				{imagesUrl?.map((img) => (
					<Grid key={img.id} xs={12} sm={6}>
						<ImageCard title={img.title} url={img.url} />
					</Grid>
				))}
			</Grid.Container>
		</Container>
	);
}
