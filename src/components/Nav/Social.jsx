import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Button, Container, Row, Tooltip, Link } from '@nextui-org/react';
import Media from './links.js';

const style = {
	fontSize: 30,
	cursor: 'pointer',
};

export default function Social() {
	const { LINKEDIN, GITHUB, TWITTER } = Media;
	return (
		<Button.Group shadow size='md' color='warning' auto light>
			<Link color='warning' href={GITHUB} target='_blank'>
				<Button>
					<Tooltip content={'Github'}>
						<GitHub sx={style} />
					</Tooltip>
				</Button>
			</Link>
			<Link color='warning' href={TWITTER} target='_blank'>
				<Button>
					<Tooltip content={'Twitter'}>
						<Twitter sx={style} />
					</Tooltip>
				</Button>
			</Link>
			<Link color='warning' href={LINKEDIN} target='_blank'>
				<Button>
					<Tooltip content={'LinkedIn'}>
						<LinkedIn sx={style} />
					</Tooltip>
				</Button>
			</Link>
		</Button.Group>
	);
}
