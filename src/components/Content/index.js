import React from 'react';
import cx from 'classnames';
import './index.scss';

const Content = ({
	children,
	vcenter = false,
	hcenter = false,
	padded = false,
	noHeader = false
}) => (
	<main
		className={cx('content', {
			'content--vcenter': vcenter,
			'content--hcenter': hcenter,
			'content--padded': padded,
			'content--noHeader': noHeader
		})}
	>
		{children}
	</main>
);

export default Content;
