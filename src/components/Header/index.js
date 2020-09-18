import React from 'react';
import './index.scss';

export const DEFAULT_HEADER_BG_COLOR = '#000000';

const Header = ({
	leftIcon,
	rightIcon,
	backgroundColor = DEFAULT_HEADER_BG_COLOR,
	children
}) => {
	return (
		<header className="header" style={{ backgroundColor }}>
			<div className="header__icon header__icon--left">{leftIcon}</div>
			<div className="header__container">{children}</div>
			<div className="header__icon header__icon--right">{rightIcon}</div>
		</header>
	);
};

export default Header;
