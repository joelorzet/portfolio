import {  Text, Card, Col, Row, Button, Modal, useModal } from '@nextui-org/react';
import React from 'react';
import ModalDetails from './ModalDetails';
import next from './next.png';

function CardProyect({
	title,
	subtitle,
	imageUrl,
	description,
	imagesUrl,
	repository,
	deploy,
	tech,
	contribution,
}) {
	const { setVisible, bindings } = useModal();

	return (
		<>
			<Card css={{ w: '40%', h: '400px' }}>
				<Card.Header
					isBlurred
					css={{
						position: 'absolute',
						zIndex: 1,
						top: 0,
						bgBlur: '#0f111466',
						borderBottom: '$borderWeights$light solid $gray800',
					}}
				>
					<Col>
						<Text size={22} weight='bold' transform='uppercase' color='#9E9E9E'>
							{title}
						</Text>
						<Text h3 color='white'>
							{subtitle}
						</Text>
					</Col>
				</Card.Header>
				<Card.Body css={{ p: 0 }}>
					<Card.Image
						src={imageUrl}
						objectFit='cover'
						width='100%'
						height='100%'
						alt='Relaxing app background'
					/>
				</Card.Body>
				<Card.Footer
					isBlurred
					css={{
						position: 'absolute',
						bgBlur: '#0f111466',
						borderTop: '$borderWeights$light solid $gray800',
						bottom: 0,
						zIndex: 1,
					}}
				>
					<Row>
						<Col>
							<Row>
								<Col span={3}>
									<Card.Image
										src={next}
										css={{ bg: 'inherit', br: '50%' }}
										height={40}
										width={40}
										alt='Breathing app icon'
									/>
								</Col>
								{/* <Col>
											<Text color='#d1d1d1' size={12}>
												Breathing App
											</Text>
											<Text color='#d1d1d1' size={12}>
												Get a good night's sleep.
											</Text>
										</Col> */}
							</Row>
						</Col>
						<Col>
							<Row justify='flex-end'>
								<Button
									flat
									auto
									rounded
									onClick={() => setVisible(true)}
									css={{ color: '#94f9f0', bg: '#94f9f026' }}
								>
									<Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
										Details
									</Text>
								</Button>
							</Row>
						</Col>
					</Row>
				</Card.Footer>
			</Card>

			<Modal
				closeButton
				blur
				animated
				scroll
				preventClose
				aria-labelledby={title}
				aria-describedby={subtitle}
				{...bindings}
				width='90vw'
				css={{ height: '90%' }}
			>
				<Modal.Header>
					<Text b size={'xxx-large'} css={{ borderBottom: '3px solid $warningLightContrast' }}>
						{title}
					</Text>
				</Modal.Header>
				<Modal.Body>
					<ModalDetails
						description={description}
						contribution={contribution}
						imagesUrl={imagesUrl}
						repository={repository}
						deploy={deploy}
						tech={tech}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button auto color='warning' onClick={() => setVisible(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CardProyect;
