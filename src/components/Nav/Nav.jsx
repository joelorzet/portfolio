import React from 'react';
import Social from './Social';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navbar, Text } from '@nextui-org/react';
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { PATH } from '../../routes.js';

function Nav() {
	const collapseItems = ['home', 'projects', 'about', 'skills'];
	const [isActive, setActive] = useState(false);
	const iconHandle = () => setActive(!isActive);

	return (
		<>
			<Navbar variant='floating' css={{ zIndex: 1000 }}>
				<Navbar.Brand>
					<Navbar.Toggle aria-label='toggle navigation' showIn='xs'>
						{isActive ? (
							<CloseIcon onClick={iconHandle} fontSize='medium' />
						) : (
							<MenuIcon onClick={iconHandle} fontSize='medium' />
						)}
					</Navbar.Toggle>

					<Social />
				</Navbar.Brand>

				<Navbar.Collapse>
					{collapseItems.map((item, index) => (
						<Navbar.CollapseItem key={index}>
							<Text h4 b transform='capitalize'>
								<RouterLink
									// css={{
									// 	color: '$text',
									// 	'&:hover': {
									// 		color: '$warning',
									// 	},
									// }}
									to={`/${PATH[item]}`}
								>
									{item}
								</RouterLink>
							</Text>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>

				<Navbar.Content enableCursorHighlight activeColor='warning' hideIn='xs' variant='underline'>
					<RouterLink to={PATH.home}>
						<Text h4 b>
							Home
						</Text>
					</RouterLink>
					<RouterLink to={PATH.projects}>
						<Text h4 b>
							Projects
						</Text>
					</RouterLink>

					<RouterLink to={PATH.about}>
						<Text h4 b>
							About
						</Text>
					</RouterLink>
					<RouterLink to={PATH.skills}>
						<Text h4 b>
							Skills
						</Text>
					</RouterLink>
				</Navbar.Content>
			</Navbar>
		</>
	);
}

export default Nav;
