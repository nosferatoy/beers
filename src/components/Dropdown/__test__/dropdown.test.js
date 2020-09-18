import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from '../index';

describe('Test Dropdown component', () => {
	it('Render Dropdown disabled', () => {
		const ref = React.createRef('test');
		const { container } = render(
			<Dropdown
				ref={ref}
				options={['a', 'b', 'c']}
				placeholder={'options'}
				type={'type'}
				filterBeers={() => {}}
				disabled={false}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Dropdown enabled', () => {
		const ref = React.createRef('test');
		const { container } = render(
			<Dropdown
				ref={ref}
				options={['a', 'b', 'c']}
				placeholder={'options'}
				type={'type'}
				filterBeers={() => {}}
				disabled={true}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
