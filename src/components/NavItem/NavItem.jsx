import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@nextui-org/react';

function NavItem({ itemName, link }) {
	return (
		<NavLink
			style={{
				decoration: 'none',
			}}
			to={link}
		>
			<Text h4 b>
				{itemName}
			</Text>
		</NavLink>
	);
}

export default NavItem;
