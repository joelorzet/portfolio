import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTop = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 350 ? setScrolled(true) : setScrolled(false);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			{scrolled ? (
				<KeyboardDoubleArrowUpIcon
					onClick={scrollToTop}
					sx={{
						fontSize: 40,
						position: 'fixed',
						bottom: 15,
						right: 30,
						zIndex: 3,
						cursor: 'pointer',
						borderRadius: '50%',
						background: '#F5A524',
						color: 'black',
					}}
				/>
			) : (
				<></>
			)}
		</>
	);
};

export default ScrollToTop;
