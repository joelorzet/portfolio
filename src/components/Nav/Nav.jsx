import React, { useState } from 'react';
import Social from '../Social/Social.jsx';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar } from '@nextui-org/react';
import NavItem from '../NavItem/NavItem.jsx';
import { navigationItems } from './navRoutes.js';

function Nav() {
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
					{navigationItems.map((item, index) => (
						<Navbar.CollapseItem key={index}>
							<NavItem itemName={item.name} link={item.link} />
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>

				<Navbar.Content enableCursorHighlight activeColor='warning' hideIn='xs' variant='underline'>
					{navigationItems?.map((e, id) => (
						<div key={id}>
							<NavItem itemName={e.name} link={e.link} />
						</div>
					))}
				</Navbar.Content>
			</Navbar>
		</>
	);
}

export default Nav;
