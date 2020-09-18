import React from 'react';
import { render } from '@testing-library/react';
import BeerSelector from '../index';

describe('Test utility function', () => {
	it('renders BeerSelector', () => {
		const { container } = render(<BeerSelector />);
		expect(container).toMatchSnapshot();
	});
});
