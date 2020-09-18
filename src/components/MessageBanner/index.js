import React from 'react';
import cx from 'classnames';

import './index.scss';

export default function MessageBanner({ text, type }) {
	return (
		<div className={cx('message', `message__${type}`)}>
			<p className={cx('message--text')}>{text}</p>
		</div>
	);
}
