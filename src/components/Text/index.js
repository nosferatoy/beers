import React from 'react';
import cx from 'classnames';

import './index.scss';

const Text = ({ size, color, opacity, bold, content }) => {
	const newClassName =
		(size ? ` text-${size}` : '') +
		(color ? ` text-${color}` : '') +
		(opacity ? ` opacity-${opacity}` : '') +
		(bold ? ` bold-${bold}` : '');

	return <div className={cx(newClassName)}>{content}</div>;
};
export const Title = props => <Text color="light" size="xxlarge" {...props} />;
Text.Title = Title;

export default Text;
