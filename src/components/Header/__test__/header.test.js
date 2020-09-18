import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

import logo from '../../../assets/logo.svg';

describe('Test Header component', () => {
	it('Render color', () => {
		const { container } = render(
			<Header color="#FF0000">
				<div>Test</div>
			</Header>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render left icon', () => {
		const { container } = render(
			<Header
				leftIcon={
					<img
						style={{ height: '50px', width: '50px' }}
						src={logo}
						alt="logo"
					/>
				}
			>
				<div>Test</div>
			</Header>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render right icon', () => {
		const { container } = render(
			<Header
				rightIcon={
					<img
						style={{ height: '50px', width: '50px' }}
						src={logo}
						alt="logo"
					/>
				}
			>
				<div>Test</div>
			</Header>
		);
		expect(container).toMatchSnapshot();
	});
});
