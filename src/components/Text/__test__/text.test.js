import React from 'react';
import { render } from '@testing-library/react';
import Text, { Title } from '../index';

describe('Test Text component', () => {
	it('Render Text', () => {
		const { container } = render(<Text content="Normal text" />);
		expect(container).toMatchSnapshot();
	});

	it('Render Text - bold and color', () => {
		const { container } = render(
			<Text bold="bold" color="color-primary" content="Bold color text" />
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Text Title', () => {
		const { container } = render(<Title content="Title text" />);
		expect(container).toMatchSnapshot();
	});
});
